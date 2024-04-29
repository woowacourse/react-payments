import { ErrorDetail } from '../types/error';
import CONDITION from '../constants/condition';

const validateExpiryMonth = (expiryMonth: string): ErrorDetail => {
  const isValidLength =
    expiryMonth.length === CONDITION.TEXT_LENGTH_MIN ||
    expiryMonth.length === CONDITION.DATE_LENGTH_MAX;
  const isValidMonth = /^(0[1-9]|1[0-2])$/.test(expiryMonth);

  if (!isValidLength) {
    return {
      isError: true,
      errorMessage: `월(月) : ${CONDITION.DATE_LENGTH_MAX}자리로 입력해주세요`,
    };
  }
  if (!isValidMonth) {
    return { isError: true, errorMessage: '월(月) : 01월부터 12월 중 하나로 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export default validateExpiryMonth;
