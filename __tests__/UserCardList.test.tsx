/// <reference types="@testing-library/jest-dom/vitest" />

import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { server } from '../src/mocks/server';
import UserCardList from '../src/pages/UserCardList';
import { theme } from '../src/styles/theme';

import type { ReactElement } from 'react';
import type { CardResponse } from '../src/types/cardStausTypes';

function renderWithProviders(ui: ReactElement) {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </MemoryRouter>,
  );
}

describe('UserCardList', () => {
  it('카드 목록을 불러와 화면에 보여준다.', async () => {
    const cards: CardResponse[] = [
      {
        id: '00000000-0000-4000-8000-000000000001',
        number: '123456******1234',
        expirationDate: '12/29',
        issuerCode: '31',
      },
    ];

    server.use(http.get('http://localhost/api/cards', () => HttpResponse.json(cards)));

    renderWithProviders(<UserCardList />);

    expect(screen.getByText('보유 카드')).toBeInTheDocument();
    expect(await screen.findByText('BC카드')).toBeInTheDocument();
    expect(screen.getByText('123456******1234')).toBeInTheDocument();
    expect(screen.getByText('유효 기간 12/29')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+ 카드 추가' })).toBeInTheDocument();
  });

  it('등록된 카드가 없으면 빈 목록 화면을 보여준다.', async () => {
    server.use(http.get('http://localhost/api/cards', () => HttpResponse.json([])));

    renderWithProviders(<UserCardList />);

    expect(await screen.findByText('등록된 카드가 없습니다')).toBeInTheDocument();
    expect(screen.getByText('아래 버튼을 눌러 첫 카드를 등록해보세요')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '카드 추가하기' })).toBeInTheDocument();
  });

  it('카드 목록 조회에 실패하면 에러 화면을 보여주고 다시 시도할 수 있다.', async () => {
    let requestCount = 0;

    server.use(
      http.get('http://localhost/api/cards', () => {
        requestCount += 1;

        if (requestCount === 1) {
          return new HttpResponse(null, { status: 500 });
        }

        return HttpResponse.json([
          {
            id: '00000000-0000-4000-8000-000000000002',
            number: '987654******9876',
            expirationDate: '01/30',
            issuerCode: '15',
          },
        ]);
      }),
    );

    renderWithProviders(<UserCardList />);

    expect(await screen.findByText(/카드 목록을 불러올 수 없어요/)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: '다시 시도' }));

    expect(await screen.findByText('카카오뱅크')).toBeInTheDocument();
    expect(screen.getByText('987654******9876')).toBeInTheDocument();
  });
});
