import { isNumericString, isValidMonth } from '@/core/utils/validator';

export interface ExpiryDate {
  month: string;
  year: string;
}

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

export const isValidFormatMonth = (month: string): boolean => {
  if (!isValidMonth(month)) return false;
  return true;
};

export const validateMonth = (month: string): string | undefined => {
  if (month.length !== MONTH_CONSTAND.LENGTH) return ERROR_MESSAGE.EMPTY;
  if (!isValidMonth(month)) return ERROR_MESSAGE.RANGE;
  if (!isNumericString(month)) return ERROR_MESSAGE.TYPE;
  return;
};

export const validateYear = (year: string): string | undefined => {
  if (year.length !== YEAR_CONSTAND.LENGTH) return ERROR_MESSAGE.EMPTY;
  if (!isNumericString(year)) return ERROR_MESSAGE.TYPE;
  return;
};
