import { CardNumberType } from '../types';

const isValidCardNumberLength = (value: string) => value.length === 0 || value.length === 4;

export const validateCardNumber = (cardNumbers: CardNumberType) => {
  const isValid = Object.values(cardNumbers).every(({ value }) => isValidCardNumberLength(value));

  const getErrorMessage = () => {
    for (const { value } of Object.values(cardNumbers)) {
      if (!isValidCardNumberLength(value)) {
        return ERROR_MESSAGES.INVALID_LENGTH;
      }
    }
    return '';
  };

  return { isValid, getErrorMessage };
};

const ERROR_MESSAGES = {
  INVALID_LENGTH: '4자리 숫자를 입력해주세요.'
};
