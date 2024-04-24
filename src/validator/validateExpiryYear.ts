import { ErrorDetail } from '../components/types/error';
import CONDITION from '../constants/condition';

const validateNumber = (value: string) => {
  const isNumber = !isNaN(Number(value));

  if (!isNumber) {
    return { isError: true, errorMessage: '숫자를 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

const validateExpiryYear = (expiryYear: string): ErrorDetail => {
  const isValidLength =
    expiryYear.length === CONDITION.TEXT_LENGTH_MIN || expiryYear.length === CONDITION.DATE_LENGTH_MAX;
  const isValidYear = Number(expiryYear) > 23 && Number(expiryYear) < 41;

  if (!isValidLength) {
    return { isError: true, errorMessage: '년도(年) : 2자리로 입력해주세요' };
  }

  if (!isValidYear) {
    return { isError: true, errorMessage: '년도(年) : 24년도부터 40년도 중 하나로 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export { validateNumber, validateExpiryYear };
