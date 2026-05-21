import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { beforeAll, afterEach, afterAll, describe, it, expect } from 'vitest';
import { server } from '../mocks/node';
import { db } from '../mocks/db';
import { theme } from '../styles/theme';
import RegisterCard from '../pages/RegisterCard';
import CardExpiryDate from '../components/CardExpiryDate';
import { useCardExpiry } from '../hooks/useCardExpiry';

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  db.reset();
});
afterAll(() => server.close());

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router-dom')>();
  return { ...actual, useNavigate: () => mockNavigate };
});

function renderRegisterCard() {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <RegisterCard />
      </MemoryRouter>
    </ThemeProvider>,
  );
}

function CardExpiryDateTestHarness() {
  const { cardExpiry, expiryHandler } = useCardExpiry();

  return <CardExpiryDate cardExpiry={cardExpiry} setCardExpiry={expiryHandler} />;
}

function renderCardExpiryDate() {
  return render(
    <ThemeProvider theme={theme}>
      <CardExpiryDateTestHarness />
    </ThemeProvider>,
  );
}

async function fillCardNumber(user: ReturnType<typeof userEvent.setup>, cardNumber: string) {
  const inputs = screen.getAllByRole('textbox');
  await user.type(inputs[0], cardNumber.slice(0, 4));
  await user.type(inputs[1], cardNumber.slice(4, 8));
  await user.type(inputs[2], cardNumber.slice(8, 12));
  await user.type(inputs[3], cardNumber.slice(12, 16));
}

describe('카드 등록', () => {
  it('카드 유효기간 월을 입력하면 년도 입력으로 포커스가 이동한다', async () => {
    const user = userEvent.setup();
    renderCardExpiryDate();

    const expiryInputs = screen.getAllByRole('textbox');
    const monthInput = expiryInputs.find((el) => el.getAttribute('placeholder') === 'MM')!;
    const yearInput = expiryInputs.find((el) => el.getAttribute('placeholder') === 'YY')!;

    await user.type(monthInput, '12');

    expect(yearInput).toHaveFocus();
  });

  it('유효기간 년도와 CVC 입력을 완료하면 다음 입력 칸으로 포커스가 이동한다', async () => {
    const user = userEvent.setup();
    renderRegisterCard();

    await fillCardNumber(user, '4111111111111111');

    const companySelect = screen.getByRole('combobox');
    await user.selectOptions(companySelect, 'bc');

    const expiryInputs = screen.getAllByRole('textbox');
    const monthInput = expiryInputs.find((el) => el.getAttribute('placeholder') === 'MM')!;
    const yearInput = expiryInputs.find((el) => el.getAttribute('placeholder') === 'YY')!;
    await user.type(monthInput, '12');
    await user.type(yearInput, '26');

    const cvcInput = screen.getByPlaceholderText('123');
    await waitFor(() => {
      expect(cvcInput).toHaveFocus();
    });

    await user.type(cvcInput, '123');

    const passwordInput = screen.getByPlaceholderText('**');
    await waitFor(() => {
      expect(passwordInput).toHaveFocus();
    });
  });

  it('카드 정보를 모두 입력하고 확인 버튼을 누르면 /cards로 이동한다', async () => {
    const user = userEvent.setup();
    renderRegisterCard();

    await fillCardNumber(user, '4111111111111111');

    const companySelect = screen.getByRole('combobox');
    await user.selectOptions(companySelect, 'bc');

    const expiryInputs = screen.getAllByRole('textbox');
    const monthInput = expiryInputs.find((el) => el.getAttribute('placeholder') === 'MM')!;
    const yearInput = expiryInputs.find((el) => el.getAttribute('placeholder') === 'YY')!;
    await user.type(monthInput, '12');
    await user.type(yearInput, '26');

    const cvcInput = screen.getByPlaceholderText('123');
    await user.type(cvcInput, '123');

    const passwordInput = screen.getByPlaceholderText('**');
    await user.type(passwordInput, '12');

    const submitButton = screen.getByRole('button', { name: '확인' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/cards');
    });
  });

  it('서버가 400을 반환하면 에러 메시지가 해당 필드 아래에 표시된다', async () => {
    const { http, HttpResponse } = await import('msw');
    server.use(
      http.post('/cards', () =>
        HttpResponse.json(
          { code: 'cardNumbers', message: '유효하지 않은 카드 번호입니다.' },
          { status: 400 },
        ),
      ),
    );

    const user = userEvent.setup();
    renderRegisterCard();

    await fillCardNumber(user, '4111111111111111');

    const companySelect = screen.getByRole('combobox');
    await user.selectOptions(companySelect, 'bc');

    const expiryInputs = screen.getAllByRole('textbox');
    const monthInput = expiryInputs.find((el) => el.getAttribute('placeholder') === 'MM')!;
    const yearInput = expiryInputs.find((el) => el.getAttribute('placeholder') === 'YY')!;
    await user.type(monthInput, '12');
    await user.type(yearInput, '26');

    const cvcInput = screen.getByPlaceholderText('123');
    await user.type(cvcInput, '123');

    const passwordInput = screen.getByPlaceholderText('**');
    await user.type(passwordInput, '12');

    await user.click(screen.getByRole('button', { name: '확인' }));

    await waitFor(() => {
      expect(screen.getByText('유효하지 않은 카드 번호입니다.')).toBeInTheDocument();
    });
  });
});
