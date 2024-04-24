import { ErrorDetail } from '../components/types/error';
import CONDITION from '../constants/condition';

const validateNumber = (value: string) => {
  const isNumber = !isNaN(Number(value));

  if (!isNumber) {
    return { isError: true, errorMessage: '숫자를 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

const validateExpiryMonth = (expiryMonth: string): ErrorDetail => {
  const isValidLength =
    expiryMonth.length === CONDITION.TEXT_LENGTH_MIN || expiryMonth.length === CONDITION.DATE_LENGTH_MAX;
  const isValidMonth = /^(0[1-9]|1[0-2])$/.test(expiryMonth);

  if (!isValidLength) {
    return { isError: true, errorMessage: '월(月) : 2자리로 입력해주세요' };
  }

  if (!isValidMonth) {
    return { isError: true, errorMessage: '월(月) : 01월부터 12월 중 하나로 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export { validateNumber, validateExpiryMonth };
