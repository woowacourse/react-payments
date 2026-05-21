import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { beforeAll, afterEach, afterAll, describe, it, expect } from 'vitest';
import { server } from '../mocks/node';
import { db } from '../mocks/db';
import { theme } from '../styles/theme';
import CardList from '../pages/CardList';

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  db.reset();
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
      expect(screen.getByText('+ 카드 추가')).toBeInTheDocument();
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
      expect(screen.getByText('411111 ****** 1111')).toBeInTheDocument();
      expect(screen.getByText('유효 기간 12/26')).toBeInTheDocument();
    });
  });
});
