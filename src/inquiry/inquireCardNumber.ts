import { ErrorDetail } from '../components/types/error';
import CONDITION from '../constants/condition';

const inquireCardNumber = (cardNumber: string): ErrorDetail => {
  const isValidLength =
    cardNumber.length === CONDITION.TEXT_LENGTH_MIN || cardNumber.length === CONDITION.CARD_NUMBER_LENGTH_MAX;
  const isValidCardNumber = /^\d{4}$/.test(cardNumber);

  if (!isValidLength) {
    return { isError: true, errorMessage: '카드 번호는 4자리로 입력해주세요' };
  }

  if (!isValidCardNumber) {
    return { isError: true, errorMessage: '카드 번호는 0000 ~ 9999 사이의 숫자로 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export default inquireCardNumber;
