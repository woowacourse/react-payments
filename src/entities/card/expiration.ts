import { isNumericString, isValidMonth } from '@/core/utils/validator';

export const MONTH_CONSTAND = {
  LENGTH: 2,
};
export const YEAR_CONSTAND = {
  LENGTH: 2,
};

const ERROR_MESSAGE = {
  TYPE: '숫자만 입력 가능합니다.',
  RANGE: '01~12 사이로 입력해 주세요.',
  EMPTY: '유효기간을 전부 채워주세요.',
};

// month

export const validateExpirationMonthFormat = (month: string): string | undefined => {
  if (month !== '' && !isNumericString(month)) return ERROR_MESSAGE.TYPE;
  if (!isValidMonth(month)) return ERROR_MESSAGE.RANGE;
  return;
};

export const validateExpirationMonth = (month: string): string | undefined => {
  if (!isNumericString(month)) return ERROR_MESSAGE.TYPE;
  if (!isValidMonth(month)) return ERROR_MESSAGE.RANGE;
  if (month.length !== MONTH_CONSTAND.LENGTH) return ERROR_MESSAGE.EMPTY;
  return;
};

// year
export const validateExpirationYearFormat = (year: string): string | undefined => {
  if (year !== '' && !isNumericString(year)) return ERROR_MESSAGE.TYPE;
  return;
};

export const validateExpirationYear = (year: string): string | undefined => {
  if (!isNumericString(year)) return ERROR_MESSAGE.TYPE;
  if (year.length !== YEAR_CONSTAND.LENGTH) return ERROR_MESSAGE.EMPTY;
  return;
};
