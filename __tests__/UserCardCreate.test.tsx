/// <reference types="@testing-library/jest-dom/vitest" />

import { ThemeProvider } from '@emotion/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { server } from '../src/mocks/server';
import RegisterCard from '../src/pages/RegisterCard';
import { theme } from '../src/styles/theme';

import type { ReactElement } from 'react';

function renderWithProviders(ui: ReactElement) {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </MemoryRouter>,
  );
}

describe('UserCardCreate', () => {
  it('카드 정보를 입력하고 확인하면 카드 등록 API를 호출한다.', async () => {
    const user = userEvent.setup();
    let postedBody: unknown;

    server.use(
      http.post('http://localhost/api/cards', async ({ request }) => {
        postedBody = await request.json();

        return HttpResponse.json('created-card-id', { status: 201 });
      }),
    );

    renderWithProviders(<RegisterCard />);

    await user.type(screen.getByLabelText('카드 번호 1번째 입력창'), '4123');
    await user.type(screen.getByLabelText('카드 번호 2번째 입력창'), '5678');
    await user.type(screen.getByLabelText('카드 번호 3번째 입력창'), '9875');
    await user.type(screen.getByLabelText('카드 번호 4번째 입력창'), '1234');

    await user.selectOptions(await screen.findByLabelText('카드사를 선택해 주세요'), 'kakaoCard');

    await user.type(await screen.findByLabelText('카드 유효기간 월 입력창'), '12');
    await user.type(screen.getByLabelText('카드 유효기간 연도 입력창'), '30');

    await user.type(await screen.findByLabelText('CVC'), '123');
    await user.type(await screen.findByLabelText('비밀번호 앞 2자리'), '12');

    await user.click(await screen.findByRole('button', { name: '확인' }));

    await waitFor(() => {
      expect(postedBody).toEqual({
        number: '4123567898751234',
        expirationDate: '12/30',
        cvc: '123',
        issuerCode: 'kakaoCard',
      });
    });
  });
});
