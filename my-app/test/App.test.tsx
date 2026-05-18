// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi, beforeAll, afterAll } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { http, HttpResponse } from 'msw';
import { server } from '../src/mocks/server';
import CardListPage from '../src/pages/CardListPage/CardListPage';
import CardAddPage from '../src/pages/CardAddPage/CardAddPage';

const API_BASE = import.meta.env.BASE_URL;
const STORAGE_KEY = 'mock-cards-DB';

describe('카드 리스트 페이지 통합 테스트', () => {
  beforeAll(() => server.listen());

  beforeEach(() => {
    localStorage.removeItem(STORAGE_KEY);
    server.resetHandlers();
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    server.resetHandlers();
    vi.restoreAllMocks();
  });

  afterAll(() => server.close());

  // 카드 목록이 비어있는 경우
  it('처음 진입 시 스켈레톤 노출, 빈 페이지 UI가 표시, 카드 추가 페이지로 이동하는 시나리오', async () => {
    server.use(
      http.get(`${API_BASE}cards`, () => {
        return HttpResponse.json([], { status: 200 });
      }),
    );

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="/card-add" element={<CardAddPage />} />
        </Routes>
      </MemoryRouter>,
    );

    // 로딩 중에는 타이틀 보유 카드 노출
    expect(screen.getByText('보유 카드')).toBeInTheDocument();

    // 데이터 비동기 페칭이 끝난 후 빈 문구 노출 확인
    await waitFor(() => {
      expect(screen.getByText('등록된 카드가 없습니다')).toBeInTheDocument();
    });
    expect(
      screen.getByText('아래 버튼을 눌러 첫 카드를 등록해보세요'),
    ).toBeInTheDocument();

    // 카드 추가하기 버튼 클릭 시 라우팅 확인
    const addCardButton = screen.getByRole('button', {
      name: '카드 추가 버튼',
    });
    await userEvent.click(addCardButton);

    expect(
      screen.getByText('결제할 카드 번호를 입력해주세요'),
    ).toBeInTheDocument();
  });

  // 카드 목록이 있고, 삭제하는 경우
  it('카드가 있을 때 삭제 버튼을 누르고 컨펌 창에서 확인을 누르면 카드가 삭제되는 시나리오', async () => {
    // LocalStorage에 카드 2개 주입
    const mockCards = [
      {
        id: 'card-1',
        issuerCode: '41',
        number: '123456******7890',
        expirationDate: '12/25',
      },
      {
        id: 'card-2',
        issuerCode: '15',
        number: '987654*****4321',
        expirationDate: '08/28',
      },
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockCards));

    // window.confirm이 뜨면 무조건 확인
    vi.spyOn(window, 'confirm').mockReturnValue(true);

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<CardListPage />} />
        </Routes>
      </MemoryRouter>,
    );

    // 두 카드가 포맷팅되어 화면에 표시되는지 검증
    await waitFor(() => {
      expect(screen.getByText('1234 56** **** 7890')).toBeInTheDocument();
      expect(screen.getByText('9876 54**** *4321')).toBeInTheDocument();
    });
    expect(screen.getByText('보유 카드 (2)')).toBeInTheDocument();

    // 첫 번째 카드의 삭제 버튼 클릭
    const deleteButtons = screen.getAllByRole('button', { name: '카드 삭제' });
    await userEvent.click(deleteButtons[0]);

    // 컨펌 창이 떴는지 확인
    expect(window.confirm).toHaveBeenCalledWith('카드를 삭제하시겠습니까?');

    // 첫 번째 카드가 지워지고 1개만 남았는지, 상단 개수 텍스트가 (1)로 변했는지 확인
    await waitFor(() => {
      expect(screen.queryByText('1234 56** **** 7890')).not.toBeInTheDocument();
      expect(screen.getByText('9876 54**** *4321')).toBeInTheDocument();
      expect(screen.getByText('보유 카드 (1)')).toBeInTheDocument();
    });
  });

  // 예외 케이스
  it('카드 목록 로드 실패 시 에러 UI가 노출되며, 다시 시도 버튼을 누르면 스켈레톤을 거쳐 정상 복구되는 시나리오', async () => {
    // 500 요청으로 핸들러 가로채기
    server.use(
      http.get(
        `${API_BASE}cards`,
        () => {
          return new HttpResponse(null, { status: 500 });
        },
        { once: true },
      ),
    );

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<CardListPage />} />
        </Routes>
      </MemoryRouter>,
    );

    // 에러 페이지 UI 확인
    await waitFor(() => {
      expect(
        screen.getByText('카드 목록을 불러올 수 없어요'),
      ).toBeInTheDocument();
    });
    expect(screen.getByText('잠시 후 다시 시도해 주세요.')).toBeInTheDocument();

    // 다시 시도하기 버튼 클릭
    const retryButton = screen.getByRole('button', { name: '다시 시도 버튼' });
    await userEvent.click(retryButton);

    // 다시 로딩 단계로 돌아가 보유 카드 텍스트 체크
    expect(screen.getByText('보유 카드')).toBeInTheDocument();

    // 두 번째 요청은 정상 데이터를 받아 복구되는지 검증
    await waitFor(() => {
      expect(screen.getByText('등록된 카드가 없습니다')).toBeInTheDocument();
    });
  });
});
