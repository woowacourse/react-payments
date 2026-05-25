/// <reference types="@testing-library/jest-dom/vitest" />

import { ThemeProvider } from '@emotion/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';

import App from '../src/App';
import { server } from '../src/mocks/server';
import RegisterCard from '../src/pages/RegisterCard';
import { theme } from '../src/styles/theme';

import type { ReactElement } from 'react';
import type { UserEvent } from '@testing-library/user-event';

function renderWithProviders(ui: ReactElement) {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </MemoryRouter>,
  );
}

function renderAppAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

async function fillValidCardForm(user: UserEvent) {
  await user.type(screen.getByLabelText('카드 번호 1번째 입력창'), '4123');
  await user.type(screen.getByLabelText('카드 번호 2번째 입력창'), '5678');
  await user.type(screen.getByLabelText('카드 번호 3번째 입력창'), '9875');
  await user.type(screen.getByLabelText('카드 번호 4번째 입력창'), '1234');

  await user.selectOptions(await screen.findByLabelText('카드사를 선택해 주세요'), 'kakaoCard');

  await user.type(await screen.findByLabelText('카드 유효기간 월 입력창'), '12');
  await user.type(screen.getByLabelText('카드 유효기간 연도 입력창'), '30');

  await user.type(await screen.findByLabelText('CVC'), '123');
  await user.type(await screen.findByLabelText('비밀번호 앞 2자리'), '12');
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('UserCardCreate', () => {
  it('카드 정보를 입력하고 확인하면 카드 등록 API를 호출한다.', async () => {
    const user = userEvent.setup();
    let postedBody: unknown;

    server.use(
      http.post('http://localhost/api/cards', async ({ request }) => {
        postedBody = await request.json();

        return HttpResponse.json({ id: 'created-card-id' }, { status: 201 });
      }),
    );

    renderWithProviders(<RegisterCard />);

    await fillValidCardForm(user);
    await user.click(await screen.findByRole('button', { name: '확인' }));

    await waitFor(() => {
      expect(postedBody).toEqual({
        number: '4123567898751234',
        expirationDate: '12/30',
        cvc: '123',
        issuerCode: '15',
      });
    });
  });

  it('카드 등록에 성공하면 완료 페이지로 이동한다.', async () => {
    const user = userEvent.setup();

    server.use(
      http.post('http://localhost/api/cards', () =>
        HttpResponse.json({ id: 'created-card-id' }, { status: 201 }),
      ),
    );

    renderAppAt('/register');

    await fillValidCardForm(user);
    await user.click(await screen.findByRole('button', { name: '확인' }));

    expect(await screen.findByText(/4123로 시작하는/)).toBeInTheDocument();
    expect(screen.getByText(/카카오뱅크가 등록되었어요./)).toBeInTheDocument();
  });

  it('카드 등록 API가 400을 응답하면 서버 에러 메시지를 필드 아래에 보여준다.', async () => {
    const user = userEvent.setup();
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    server.use(
      http.post('http://localhost/api/cards', () =>
        HttpResponse.json(
          {
            code: 'INVALID_CVC',
            message: '유효하지 않은 CVC입니다.',
          },
          { status: 400 },
        ),
      ),
    );

    renderWithProviders(<RegisterCard />);

    await fillValidCardForm(user);
    await user.click(await screen.findByRole('button', { name: '확인' }));

    expect(await screen.findByText('유효하지 않은 CVC입니다.')).toBeInTheDocument();
    expect(screen.getByLabelText('CVC')).toHaveAttribute('aria-invalid', 'true');
    expect(alertSpy).not.toHaveBeenCalled();
  });
});
