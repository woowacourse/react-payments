import { expect, test } from 'vitest'; // Vitest 함수 임포트

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { renderProvider } from '../../../utils/render';

import { AppRoutes } from '../../../../src/routes';

const DUMMY_FORM_DATA = {
  cardNumbers: ['3700', '1234', '5678', '9012'],
  card: /신한카드/,
  expirationDate: { month: '12', year: '12' },
  cvc: '234',
  password: '12',
};

describe('카드 등록 페이지 테스트', async () => {
  test('카드 등록을 위한 유효한 데이터를 다 입력 후 등록 버튼을 누르면 카드 목록 페이지로 이동하고 추가한 카드가 목록에 보인다', async () => {
    // ARRANGE
    renderProvider(<AppRoutes />, { route: '/payments/register' });

    // ACT
    // (cardNumber)
    const cardInputs = screen.getAllByPlaceholderText('1234'); // [input, input, input, input]
    Array.from({ length: 4 }).forEach(async (_, index) => {
      await userEvent.type(cardInputs[index], DUMMY_FORM_DATA.cardNumbers[index]);
    });

    // (card)
    await userEvent.click(screen.getByText(/카드사를 선택해주세요/));
    await userEvent.click(screen.getByText(DUMMY_FORM_DATA.card));

    // (expirationDate)
    await userEvent.type(screen.getByPlaceholderText(/MM/), DUMMY_FORM_DATA.expirationDate.month);
    await userEvent.type(screen.getByPlaceholderText(/YY/), DUMMY_FORM_DATA.expirationDate.year);

    // (cvc)
    await userEvent.type(screen.getByPlaceholderText('123'), DUMMY_FORM_DATA.cvc);

    // (password)
    const passwordInput = document.querySelector('input[type="password"]');
    if (passwordInput) await userEvent.type(passwordInput, DUMMY_FORM_DATA.password);

    userEvent.click(await screen.getByRole('button'));

    // ASSERT
    expect(await screen.findByText('3700')).toBeInTheDocument();
    expect(await screen.findByText('12/12')).toBeInTheDocument();
    expect(await screen.findByText('신한카드')).toBeInTheDocument();
  });
});
