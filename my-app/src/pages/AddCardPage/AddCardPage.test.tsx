import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { describe, expect, it } from 'vitest';
import App from '../../App';
import SuccessPage from '../SuccessPage/SuccessPage';
import AddCardPage from './AddCardPage';

function renderAddCardPage() {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <AddCardPage /> },
        { path: 'success', element: <SuccessPage /> },
      ],
    },
  ]);

  render(<RouterProvider router={router} />);
}

async function fillCardForm({
  number,
  issuerCode,
  expirationDate = '12/28',
  cvc = '123',
}: {
  number: string;
  issuerCode: string;
  expirationDate?: string;
  cvc?: string;
}) {
  const user = userEvent.setup();
  const [month, year] = expirationDate.split('/');

  await user.type(screen.getByPlaceholderText('0000 0000 0000 0000'), number);
  await user.selectOptions(await screen.findByRole('combobox'), issuerCode);
  await user.type(await screen.findByPlaceholderText('MM'), month);
  await user.type(await screen.findByPlaceholderText('YY'), year);
  await user.type(await screen.findByPlaceholderText('123'), cvc);
  await user.type(await screen.findByPlaceholderText('**'), '12');
  await user.click(await screen.findByRole('button', { name: '확인' }));
}

describe('테스트 카드 번호', () => {
  it('9999 1234 5678 9012 / 롯데카드 / 400 INVALID_CARD_NUMBER', async () => {
    renderAddCardPage();

    await fillCardForm({
      number: '9999123456789012',
      issuerCode: '71',
    });

    expect(
      await screen.findByText('유효하지 않은 카드 번호입니다.'),
    ).toBeInTheDocument();
  });

  it('4111 1111 1111 1111 + cvc 000 / BC카드 / 400 INVALID_CVC', async () => {
    renderAddCardPage();

    await fillCardForm({
      number: '4111111111111111',
      issuerCode: '31',
      cvc: '000',
    });

    expect(await screen.findByText('유효하지 않은 CVC입니다.')).toBeInTheDocument();
  });

  it('5511 1234 5678 9012 + exp 01/26 / BC카드 / 400 INVALID_EXPIRATION_DATE', async () => {
    renderAddCardPage();

    await fillCardForm({
      number: '5511123456789012',
      issuerCode: '31',
      expirationDate: '01/26',
    });

    expect(await screen.findByText('만료일이 지난 카드입니다.')).toBeInTheDocument();
  });

  it('5511 1234 5678 9012 / BC카드 / 201', async () => {
    renderAddCardPage();

    await fillCardForm({
      number: '5511123456789012',
      issuerCode: '31',
    });

    expect(await screen.findByText(/5511으로 시작하는/)).toBeInTheDocument();
    expect(await screen.findByText(/BC카드가 등록되었어요/)).toBeInTheDocument();
  });

  it('4111 1111 1111 1111 / 신한카드 / 201', async () => {
    renderAddCardPage();

    await fillCardForm({
      number: '4111111111111111',
      issuerCode: '41',
    });

    expect(await screen.findByText(/4111으로 시작하는/)).toBeInTheDocument();
    expect(await screen.findByText(/신한카드가 등록되었어요/)).toBeInTheDocument();
  });
});
