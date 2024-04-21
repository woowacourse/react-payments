import { IErrorStatus } from './index.d';

const inquireExpiryYear = (expiryYear: string): IErrorStatus => {
  const isValidLength = expiryYear.length === 0 || expiryYear.length === 2;
  const isValidYear = Number(expiryYear) > 23 && Number(expiryYear) < 41;

  if (!isValidLength) {
    return { isError: true, errorMessage: '년도(年) : 2자리로 입력해주세요' };
  }

  if (!isValidYear) {
    return { isError: true, errorMessage: '년도(年) : 24년도부터 40년도 중 하나로 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export default inquireExpiryYear;
