import { IErrorStatus } from './index.d';

const inquireExpiryMonth = (expiryMonth: string): IErrorStatus => {
  const isValidLength = expiryMonth.length === 0 || expiryMonth.length === 2;
  const isValidMonth = /^(0[1-9]|1[0-2])$/.test(expiryMonth);

  if (!isValidLength) {
    return { isError: true, errorMessage: '월(月) : 2자리로 입력해주세요' };
  }

  if (!isValidMonth) {
    return { isError: true, errorMessage: '월(月) : 01월부터 12월 중 하나로 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export default inquireExpiryMonth;
