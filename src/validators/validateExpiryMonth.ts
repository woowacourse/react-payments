import { IErrorStatus } from './index.d';

const EXPIRY_MONTH_LENGTH = 2;

const validateExpiryMonth = (expiryMonth: string): IErrorStatus => {
  const isValidLength = expiryMonth.length === EXPIRY_MONTH_LENGTH;
  const isValidMonth = /^(0[1-9]|1[0-2])$/.test(expiryMonth);

  if (!isValidLength) {
    return { isError: true, errorMessage: '월(月) : 2자리로 입력해 주세요' };
  }

  if (!isValidMonth) {
    return { isError: true, errorMessage: '월(月) : 01월부터 12월 중 하나로 입력해 주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export default validateExpiryMonth;
