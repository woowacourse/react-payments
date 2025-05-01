import { CardNumberType } from '../types';

export const isValidCardNumber = (value: string) => value.length === 0 || value.length === 4;

export const isValidCardNumbers = (cardNumbers: CardNumberType) => Object.values(cardNumbers).every(({ value }) => isValidCardNumber(value));

const ERROR_MESSAGES = {
  INVALID_LENGTH: '4자리 숫자를 입력해주세요.'
};

export const getCardNumbersErrorMessage = (cardNumbers: CardNumberType) => {
  for (const { value } of Object.values(cardNumbers)) {
    if (!isValidCardNumber(value)) {
      return ERROR_MESSAGES.INVALID_LENGTH;
    }
  }
  return '';
};
