import { IErrorStatus } from './index.d';

const validateCardNumber = (cardNumber: string): IErrorStatus => {
  const isValidLength = cardNumber.length === 0 || cardNumber.length === 4;
  if (!isValidLength) {
    return { isError: true, errorMessage: '카드 번호는 4자리로 입력해주세요' };
  }

  const isValidCardNumber = /^0{1,4}|[1-9]\d{0,3}$/.test(cardNumber);
  if (!isValidCardNumber) {
    return { isError: true, errorMessage: '카드 번호는 0000 ~ 9999 사이의 숫자로 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export default validateCardNumber;
