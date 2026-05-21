import { expect, test } from 'vitest'; // Vitest 함수 임포트

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { renderProvider } from '../../../utils/render';

import { AppRoutes } from '../../../../src/routes';

describe('카드 등록 페이지 테스트', async () => {
  test('카드 등록을 위한 유효한 데이터를 다 입력 후 등록 버튼을 누르면 카드 목록 페이지로 이동하고 추가한 카드가 목록에 보인다', async () => {
    // ARRANGE
    renderProvider(<AppRoutes />, { route: '/payments/register' });

    // ACT
    const cardInputs = screen.getAllByPlaceholderText('1234'); // [input, input, input, input]

    // cardNumber
    await userEvent.type(cardInputs[0], '3700'); // 첫 번째 칸
    await userEvent.type(cardInputs[1], '1234'); // 두 번째 칸
    await userEvent.type(cardInputs[2], '5678'); // 세 번째 칸
    await userEvent.type(cardInputs[3], '9012'); // 네 번째 칸

    await userEvent.click(screen.getByText(/카드사를 선택해주세요/));
    await userEvent.click(screen.getByText(/신한카드/));

    await userEvent.type(screen.getByPlaceholderText(/MM/), '12');
    await userEvent.type(screen.getByPlaceholderText(/YY/), '12');

    await userEvent.type(screen.getByPlaceholderText('123'), '234');

    const passwordInput = document.querySelector('input[type="password"]');
    if (passwordInput) await userEvent.type(passwordInput, '12');

    userEvent.click(await screen.getByRole('button'));

    // ASSERT
    expect(await screen.findByText('3700')).toBeInTheDocument();
    expect(await screen.findByText('12/12')).toBeInTheDocument();
    expect(await screen.findByText('신한카드')).toBeInTheDocument();
  });
});
