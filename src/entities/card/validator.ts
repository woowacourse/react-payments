import { isNumericString, isValidMonth } from '@/core/utils/validator';
import type { ExpirationDate } from '@/entities/card/types';

// 유효기간
const validateExpirationMonth = (month: string) => {
  if (month.length !== 2) return false;
  if (!isNumericString(month)) return false;
  if (!isValidMonth(month)) return false;
  return true;
};

const validateExpirationYear = (year: string) => {
  if (year.length !== 2) return false;
  if (!isNumericString(year)) return false;
  return true;
};

export const validateExpirationDate = (expirationDate: ExpirationDate) => {
  return {
    month: validateExpirationMonth(expirationDate.month),
    year: validateExpirationYear(expirationDate.year),
  };
};
