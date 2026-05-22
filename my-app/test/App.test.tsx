// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { http, HttpResponse } from 'msw';
import { server } from '../src/mocks/server';
import CardListPage from '../src/pages/CardListPage/CardListPage';
import CardAddPage from '../src/pages/CardAddPage/CardAddPage';
import { mockDB } from '../src/mocks/mockDB';
import CardAddSuccessPage from '../src/pages/CardAddSuccessPage/CardAddSuccessPage';

const API_BASE = import.meta.env.BASE_URL;

describe('카드 리스트 페이지 통합 테스트', () => {
  beforeEach(() => {
    mockDB.clearCards();
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    server.resetHandlers();
    vi.restoreAllMocks();
  });

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

  // 카드 등록 사용자 흐름
  it('카드 등록 폼을 순차적으로 채우고 제출하면, 성공 페이지를 거쳐 목록에 카드가 추가되는 시나리오', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="/card-add" element={<CardAddPage />} />
          <Route path="/card-add-success" element={<CardAddSuccessPage />} />
        </Routes>
      </MemoryRouter>,
    );

    // 카드 리스트 페이지에서 카드 추가 버튼 클릭하여 이동
    const addCardButton = await screen.findByRole('button', {
      name: '카드 추가 버튼',
    });
    await userEvent.click(addCardButton);
    expect(
      screen.getByText('결제할 카드 번호를 입력해주세요'),
    ).toBeInTheDocument();

    // 카드 번호 입력
    const cardNumInputs = screen.getAllByRole('textbox');
    await userEvent.type(cardNumInputs[0], '4111'); // Visa 카드
    await userEvent.type(cardNumInputs[1], '2222');
    await userEvent.type(cardNumInputs[2], '3333');
    await userEvent.type(cardNumInputs[3], '4444');

    // 카드사 선택
    const companyButton = await screen.findByText('카드사를 선택해주세요');
    await userEvent.click(companyButton);
    const companySelect = await screen.findByText('신한카드');
    await userEvent.click(companySelect);

    // 유효기간 입력
    const monthInput = await screen.findByPlaceholderText('MM');
    const yearInput = await screen.findByPlaceholderText('YY');
    await userEvent.type(monthInput, '12');
    await userEvent.type(yearInput, '25');

    // CVC 입력
    const cvcInput = await screen.findByRole('textbox', { name: /CVC/ });
    await userEvent.type(cvcInput, '123');

    // 비밀번호 입력
    const pwdInput = await screen.findByLabelText(/비밀번호/);
    await userEvent.type(pwdInput, '12');

    // 확인 버튼이 활성화 확인 및 제출
    const submitButton = await screen.findByRole('button', { name: '확인' });
    expect(submitButton).toBeEnabled();
    await userEvent.click(submitButton);

    // 성공 페이지의 텍스트를 검증
    await waitFor(() => {
      expect(
        screen.getByText(/4111로 시작하는 신한카드가 등록되었어요/),
      ).toBeInTheDocument();
    });

    // 성공 페이지에서 확인 버튼을 눌러 카드 리스트 페이지로 복귀
    const confirmButton = await screen.findByRole('button', { name: '확인' });
    await userEvent.click(confirmButton);

    // 카드 리스트에 방금 추가한 카드가 포맷팅되어 렌더링되었는지 최종 확인!
    await waitFor(() => {
      expect(screen.getByText('보유 카드 (1)')).toBeInTheDocument();
      expect(screen.getByText('4111 22** **** 4444')).toBeInTheDocument();
    });
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
    mockDB.saveCards(mockCards);

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
