import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { beforeAll, afterEach, afterAll, describe, it, expect, vi } from 'vitest';
import { server } from '../mocks/node';
import { db } from '../mocks/db';
import { theme } from '../styles/theme';
import CardList from '../pages/CardList';

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  db.reset();
  vi.restoreAllMocks();
});
afterAll(() => server.close());

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router-dom')>();
  return { ...actual, useNavigate: () => vi.fn() };
});

function renderCardList() {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <CardList />
      </MemoryRouter>
    </ThemeProvider>,
  );
}

describe('카드 목록', () => {
  it('카드 목록을 불러오는 동안 스켈레톤 UI가 표시된다', () => {
    renderCardList();

    expect(screen.getByText('보유 카드')).toBeInTheDocument();
    expect(screen.getAllByTestId('card-list-skeleton-item')).toHaveLength(3);
    expect(screen.getByTestId('card-list-skeleton-action')).toBeInTheDocument();
    expect(screen.queryByText('+ 카드 추가')).not.toBeInTheDocument();
  });

  it('등록된 카드가 없으면 카드 항목이 표시되지 않는다', async () => {
    const { http, HttpResponse } = await import('msw');
    server.use(http.get('/cards', () => HttpResponse.json(db.getCards())));

    renderCardList();

    await waitFor(() => {
      expect(screen.getByText('보유 카드')).toBeInTheDocument();
      expect(screen.getByText('등록된 카드가 없습니다')).toBeInTheDocument();
      expect(screen.getByText('아래 버튼을 눌러 첫 카드를 등록해보세요')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '카드 추가하기' })).toBeInTheDocument();
    });
  });

  it('등록된 카드가 있으면 목록에 카드 정보가 표시된다', async () => {
    const { http, HttpResponse } = await import('msw');
    db.addCard({
      id: '1',
      issuerCode: '31',
      number: '411111******1111',
      expirationDate: '12/26',
    });
    server.use(http.get('/cards', () => HttpResponse.json(db.getCards())));

    renderCardList();

    await waitFor(() => {
      expect(screen.getByText('보유 카드')).toBeInTheDocument();
      expect(screen.getByText('BC카드')).toBeInTheDocument();
      expect(screen.getByText('4111 **** **** 1111')).toBeInTheDocument();
      expect(screen.getByText('유효 기간 12/26')).toBeInTheDocument();
    });
  });

  it('카드 목록을 불러오지 못하면 에러 화면을 표시하고 다시 시도할 수 있다', async () => {
    const { http, HttpResponse } = await import('msw');
    const user = userEvent.setup();
    let requestCount = 0;

    server.use(
      http.get('/cards', () => {
        requestCount += 1;

        if (requestCount === 1) {
          return HttpResponse.json(null, { status: 500 });
        }

        return HttpResponse.json(db.getCards());
      }),
    );

    renderCardList();

    await waitFor(() => {
      expect(screen.getByText('카드 목록을 불러올 수 없어요')).toBeInTheDocument();
      expect(screen.getByText('잠시 후 다시 시도해 주세요.')).toBeInTheDocument();
    });

    await user.click(screen.getByRole('button', { name: '다시 시도' }));

    await waitFor(() => {
      expect(screen.getByText('등록된 카드가 없습니다')).toBeInTheDocument();
    });
  });

  it('카드 삭제 확인 시 삭제 요청 후 목록을 갱신한다', async () => {
    const { http, HttpResponse } = await import('msw');
    const user = userEvent.setup();
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true);
    let deleteRequestCount = 0;

    db.addCard({
      id: '1',
      issuerCode: '31',
      number: '411111******1111',
      expirationDate: '12/26',
    });
    server.use(
      http.get('/cards', () => HttpResponse.json(db.getCards())),
      http.delete('/cards/:id', ({ params }) => {
        deleteRequestCount += 1;
        db.deleteCard(String(params.id));

        return new HttpResponse(null, { status: 204 });
      }),
    );

    renderCardList();

    await waitFor(() => {
      expect(screen.getByText('4111 **** **** 1111')).toBeInTheDocument();
    });

    await user.click(screen.getByRole('button', { name: '카드 삭제' }));

    await waitFor(() => {
      expect(screen.queryByText('4111 **** **** 1111')).not.toBeInTheDocument();
    });
    expect(confirmSpy).toHaveBeenCalled();
    expect(deleteRequestCount).toBe(1);
  });

  it('카드 삭제 취소 시 삭제 요청을 보내지 않는다', async () => {
    const { http, HttpResponse } = await import('msw');
    const user = userEvent.setup();
    vi.spyOn(window, 'confirm').mockReturnValue(false);
    let deleteRequestCount = 0;

    db.addCard({
      id: '1',
      issuerCode: '31',
      number: '411111******1111',
      expirationDate: '12/26',
    });
    server.use(
      http.get('/cards', () => HttpResponse.json(db.getCards())),
      http.delete('/cards/:id', () => {
        deleteRequestCount += 1;

        return new HttpResponse(null, { status: 204 });
      }),
    );

    renderCardList();

    await waitFor(() => {
      expect(screen.getByText('4111 **** **** 1111')).toBeInTheDocument();
    });

    await user.click(screen.getByRole('button', { name: '카드 삭제' }));

    expect(deleteRequestCount).toBe(0);
    expect(screen.getByText('4111 **** **** 1111')).toBeInTheDocument();
  });
});
