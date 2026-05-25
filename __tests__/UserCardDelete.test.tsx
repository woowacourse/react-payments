/// <reference types="@testing-library/jest-dom/vitest" />

import { ThemeProvider } from '@emotion/react';
import { screen, waitFor } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { server } from '../src/mocks/server';
import UserCardList from '../src/pages/UserCardList';
import { theme } from '../src/styles/theme';

import type { ReactElement } from 'react';

function renderWithProviders(ui: ReactElement) {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </MemoryRouter>,
  );
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('UserCardDelete', () => {
  it('삭제 아이콘을 누르고 확인하면 카드 삭제 API를 호출한다.', async () => {
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true);
    let deletedCardId = '';

    server.use(
      http.get('http://localhost/api/cards', () =>
        HttpResponse.json([
          {
            id: '00000000-0000-4000-8000-000000000003',
            number: '123456******1234',
            expirationDate: '12/29',
            issuerCode: '31',
          },
        ]),
      ),
      http.delete('http://localhost/api/cards/:id', async ({ params }) => {
        deletedCardId = String(params.id);

        await new Promise(() => {});
      }),
    );

    renderWithProviders(<UserCardList />);

    await screen.findByText('BC카드');
    await userEvent.click(screen.getByAltText('카드 삭제 아이콘'));

    expect(confirmSpy).toHaveBeenCalledWith('카드를 삭제하시겠습니까?');
    await waitFor(() => {
      expect(deletedCardId).toBe('00000000-0000-4000-8000-000000000003');
    });
  });

  it('삭제 확인을 취소하면 카드 삭제 API를 호출하지 않는다.', async () => {
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);
    let deleteRequestCount = 0;

    server.use(
      http.get('http://localhost/api/cards', () =>
        HttpResponse.json([
          {
            id: '00000000-0000-4000-8000-000000000004',
            number: '123456******1234',
            expirationDate: '12/29',
            issuerCode: '31',
          },
        ]),
      ),
      http.delete('http://localhost/api/cards/:id', () => {
        deleteRequestCount += 1;

        return new HttpResponse(null, { status: 204 });
      }),
    );

    renderWithProviders(<UserCardList />);

    await screen.findByText('BC카드');
    await userEvent.click(screen.getByAltText('카드 삭제 아이콘'));

    expect(confirmSpy).toHaveBeenCalledWith('카드를 삭제하시겠습니까?');
    expect(deleteRequestCount).toBe(0);
  });
});
