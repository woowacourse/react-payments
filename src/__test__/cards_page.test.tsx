import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import CardsPage from '../pages/CardsPage';
import type { CardsResponse } from '../types/api';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
});
afterAll(() => server.close());

const renderCardsPage = () =>
  render(
    <MemoryRouter initialEntries={['/cards']}>
      <Routes>
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/" element={<div>카드 등록</div>} />
      </Routes>
    </MemoryRouter>,
  );

describe('카드 목록', () => {
  test('/cards 접속 시 로딩 중에는 스켈레톤이 표시된다', async () => {
    server.use(http.get('/cards', () => HttpResponse.json([], { status: 200 })));

    renderCardsPage();

    expect(screen.getByText('카드 목록 로딩 중')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('카드 목록 로딩 중')).not.toBeInTheDocument();
    });
  });

  test('GET /cards 요청이 실패하면 "카드 목록을 불러올 수 없어요"가 표시된다', async () => {
    server.use(http.get('/cards', () => HttpResponse.json(null, { status: 500 })));

    renderCardsPage();

    await waitFor(() => {
      expect(screen.getByText('카드 목록을 불러올 수 없어요')).toBeInTheDocument();
    });
  });

  test('GET /cards 응답이 빈 배열이면 "등록된 카드가 없습니다"가 표시된다', async () => {
    server.use(http.get('/cards', () => HttpResponse.json([], { status: 200 })));

    renderCardsPage();

    await waitFor(() => {
      expect(screen.getByText('등록된 카드가 없습니다')).toBeInTheDocument();
    });
  });

  test('GET /cards 응답에 카드가 있으면 카드 목록이 표시된다', async () => {
    const mockCards: CardsResponse = [
      { id: '1', issuerCode: '31', number: '551112******9012', expirationDate: '12/26' },
      { id: '2', issuerCode: '41', number: '451112******1290', expirationDate: '06/25' },
    ];

    server.use(http.get('/cards', () => HttpResponse.json(mockCards, { status: 200 })));

    renderCardsPage();

    await waitFor(() => {
      expect(screen.getByText('보유 카드 (2)')).toBeInTheDocument();
    });
  });
});

describe('카드 삭제', () => {
  const initialCards: CardsResponse = [
    { id: '1', issuerCode: '31', number: '551112******9012', expirationDate: '12/26' },
    { id: '2', issuerCode: '41', number: '451112******1290', expirationDate: '06/25' },
  ];

  const setupCardsPage = async () => {
    server.use(http.get('/cards', () => HttpResponse.json(initialCards, { status: 200 })));
    renderCardsPage();
    await waitFor(() => expect(screen.getByText('보유 카드 (2)')).toBeInTheDocument());
  };

  test('✕ 버튼 클릭 시 카드 번호 앞자리가 포함된 삭제 확인 다이얼로그가 표시된다', async () => {
    const user = userEvent.setup();
    const confirm = vi.spyOn(window, 'confirm').mockReturnValue(false);

    await setupCardsPage();

    await user.click(screen.getAllByRole('button', { name: '✕' })[0]);

    expect(confirm).toHaveBeenCalledWith('5511로 시작하는 카드를 삭제할게요');
  });

  test('삭제 취소 시 카드 목록이 유지된다', async () => {
    const user = userEvent.setup();
    vi.spyOn(window, 'confirm').mockReturnValue(false);

    await setupCardsPage();

    await user.click(screen.getAllByRole('button', { name: '✕' })[0]);

    expect(screen.getByText('보유 카드 (2)')).toBeInTheDocument();
  });

  test('삭제 확인 시 카드 목록이 갱신되며 해당 카드가 목록에서 사라진다.', async () => {
    const user = userEvent.setup();
    vi.spyOn(window, 'confirm').mockReturnValue(true);

    let deletedId: string | undefined;
    server.use(
      http.get('/cards', () => {
        const cards = deletedId ? initialCards.filter((c) => c.id !== deletedId) : initialCards;
        return HttpResponse.json(cards, { status: 200 });
      }),
      http.delete('/cards/:id', ({ params }) => {
        deletedId = params.id as string;
        return new HttpResponse(null, { status: 204 });
      }),
    );

    renderCardsPage();
    await waitFor(() => expect(screen.getByText('보유 카드 (2)')).toBeInTheDocument());

    const targetButton = screen.getAllByRole('button', { name: '✕' })[0];
    const targetCard = targetButton.closest<HTMLElement>('[data-id]')!;
    const targetText = within(targetCard).getByText(/유효기간/).textContent!;

    await user.click(targetButton);

    await waitFor(() => {
      expect(screen.queryByText(targetText)).not.toBeInTheDocument();
    });
  });

  test('삭제 요청 실패 시 "카드를 삭제하지 못했어요" 알림이 표시된다', async () => {
    const user = userEvent.setup();
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    const alert = vi.spyOn(window, 'alert').mockImplementation(() => {});

    server.use(
      http.get('/cards', () => HttpResponse.json(initialCards, { status: 200 })),
      http.delete('/cards/:id', () => new HttpResponse(null, { status: 500 })),
    );

    renderCardsPage();
    await waitFor(() => expect(screen.getByText('보유 카드 (2)')).toBeInTheDocument());

    await user.click(screen.getAllByRole('button', { name: '✕' })[0]);

    await waitFor(() => expect(alert).toHaveBeenCalledWith('카드를 삭제하지 못했어요'));
  });
});
