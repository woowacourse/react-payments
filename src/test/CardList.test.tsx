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
  it('등록된 카드가 없으면 카드 항목이 표시되지 않는다', async () => {
    renderCardList();

    await waitFor(() => {
      expect(screen.getByText('보유 카드 (0)')).toBeInTheDocument();
    });
  });

  it('등록된 카드가 있으면 목록에 카드 정보가 표시된다', async () => {
    db.addCard({
      id: '1',
      cardNumbers: ['4111', '1111', '1111', '1111'],
      cardCompany: 'bc',
      expiryDate: ['12', '26'],
    });

    renderCardList();

    await waitFor(() => {
      expect(screen.getByText('보유 카드 (1)')).toBeInTheDocument();
      expect(screen.getByText('BC카드')).toBeInTheDocument();
      expect(screen.getByText('4111 1111 **** ****')).toBeInTheDocument();
      expect(screen.getByText('유효 기간 12/26')).toBeInTheDocument();
    });
  });
});
