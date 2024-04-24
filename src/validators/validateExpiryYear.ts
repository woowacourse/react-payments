import { IErrorStatus } from './index.d';

const EXPIRY_YEAR_LENGTH = 2;
const MIN_YEAR = 24;
const MAX_YEAR = 40;

const validateExpiryYear = (expiryYear: string): IErrorStatus => {
  const isValidLength = expiryYear.length === EXPIRY_YEAR_LENGTH;
  const isValidYear = Number(expiryYear) >= MIN_YEAR && Number(expiryYear) <= MAX_YEAR;

  if (!isValidLength) {
    return { isError: true, errorMessage: '년도(年) : 2자리로 입력해주세요' };
  }

  if (!isValidYear) {
    return { isError: true, errorMessage: '년도(年) : 24년도부터 40년도 중 하나로 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export default validateExpiryYear;
