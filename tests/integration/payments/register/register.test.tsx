import { describe, expect, test } from 'vitest'; // Vitest 함수 임포트

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { renderProvider } from '../../../utils/render';

import { AppRoutes } from '../../../../src/routes';

import { ERROR_MESSAGE } from '../../../../src/pages/payments/register/flow/constants';

interface FillRegisterCardFormValues {
  cardNumbers?: string[];
  card?: string;
  expirationDate?: { month: string; year: string };
  cvc?: string;
  password?: string;
}

const DUMMY_FORM_DATA = {
  cardNumbers: ['4400', '1234', '5678', '9012'],
  card: '신한카드',
  expirationDate: { month: '12', year: '12' },
  cvc: '234',
  password: '12',
};

const fillRegisterCardForm = async (formValues: FillRegisterCardFormValues = {}) => {
  const resolvedFormValues = {
    ...DUMMY_FORM_DATA,
    ...formValues,
  };

  const { cardNumbers, card, expirationDate, cvc, password } = resolvedFormValues;

  // (cardNumber)
  const cardInputs = await screen.findAllByPlaceholderText('1234'); // [input, input, input, input]
  for (const [index, input] of cardInputs.entries()) {
    await userEvent.type(input, cardNumbers[index]);
  }

  // (card)
  await userEvent.click(screen.getByText(/카드사를 선택해주세요/));
  await userEvent.click(screen.getByText(card));

  // (expirationDate)
  await userEvent.type(screen.getByPlaceholderText(/MM/), expirationDate.month);
  await userEvent.type(screen.getByPlaceholderText(/YY/), expirationDate.year);

  // (cvc)
  await userEvent.type(screen.getByPlaceholderText('123'), cvc);

  // (password)
  const passwordInput = document.querySelector('input[type="password"]');
  if (passwordInput) await userEvent.type(passwordInput, password);
};

describe('카드 등록 페이지 테스트', () => {
  describe('성공 케이스', () => {
    test('카드 등록을 위한 유효한 데이터를 다 입력 후 등록 버튼을 누르면 카드 목록 페이지로 이동하고 추가한 카드가 목록에 보인다', async () => {
      // ARRANGE
      renderProvider(<AppRoutes />, { route: '/payments/register' });

      // ACT
      await fillRegisterCardForm();

      userEvent.click(await screen.getByRole('button'));

      // ASSERT
      expect(await screen.findByText('4400')).toBeInTheDocument();
      expect(await screen.findByText('12/12')).toBeInTheDocument();
      expect(await screen.findByText('신한카드')).toBeInTheDocument();
    });
  });

  describe('실패 케이스', () => {
    describe('프론트 유효성 검사', () => {
      test('카드 번호를 잘못 입력시 에러 메시지가 보이고 포커스 처리된다(서버 에러)', async () => {
        // ARRANGE
        renderProvider(<AppRoutes />, { route: '/payments/register' });

        // ACT
        await fillRegisterCardForm({ cardNumbers: ['0000', '1234', '1234', '0000'] });

        userEvent.click(await screen.getByRole('button'));

        // ASSERT
        expect(await screen.findByText(ERROR_MESSAGE.INVALID_CARD_NUMBER)).toBeInTheDocument();
      });

      test('CVC를 잘못 입력시 에러 메시지가 보이고 포커스 처리된다(서버 에러)', async () => {
        // ARRANGE
        renderProvider(<AppRoutes />, { route: '/payments/register' });

        // ACT
        await fillRegisterCardForm({ cvc: '000' });

        userEvent.click(await screen.getByRole('button'));

        // ASSERT
        expect(await screen.findByText(ERROR_MESSAGE.INVALID_CVC)).toBeInTheDocument();
      });
    });

    describe('서버 에러 처리', () => {
      test('유효기간(월을 13으로)를 잘못 입력시 에러 메시지가 보이고 포커스 처리된다(프론트 에러)', async () => {
        // ARRANGE
        renderProvider(<AppRoutes />, { route: '/payments/register' });

        // ACT
        await fillRegisterCardForm({ expirationDate: { month: '13', year: '12' } });

        // ASSERT
        expect(await screen.findByText('유효기간(월)는 01부터 12까지의 숫자여야합니다')).toBeInTheDocument();
      });
    });
  });
});
