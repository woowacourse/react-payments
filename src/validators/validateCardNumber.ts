import { IErrorStatus } from './index.d';

const CARD_NUMBER_LENGTH = 4;

const validateCardNumber = (cardNumber: string): IErrorStatus => {
  const isValidLength = cardNumber.length === CARD_NUMBER_LENGTH;
  if (!isValidLength) {
    return { isError: true, errorMessage: '4자리로 입력해 주세요' };
  }

  const isValidCardNumber = /^\d{4}$/.test(cardNumber);
  if (!isValidCardNumber) {
    return { isError: true, errorMessage: '0000 ~ 9999 사이의 숫자로 입력해 주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export default validateCardNumber;
