import { isNumericString } from '@/core/utils/validator';

export interface ExpiryDate {
  month: string;
  year: string;
}

export const EXPIRY_MONTH_LENGTH = 2;
export const EXPIRY_YEAR_LENGTH = 2;

export const isValidMonth = (month: string) => {
  if (month.length === 1) return /^[0-1]$/.test(month);
  if (month.length === 2) return /^(0[1-9]|1[0-2])$/.test(month);
  return true;
};

export const validateExpiryMonth = (month: string): boolean => {
  return isNumericString(month) && isValidMonth(month) && month.length === EXPIRY_MONTH_LENGTH;
};

export const validateExpiryYear = (year: string): boolean => {
  return isNumericString(year) && year.length === EXPIRY_YEAR_LENGTH;
};
