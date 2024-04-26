import { MONTH_RANGE, YEAR_RANGE } from '../constants/system';

export const isValidMonth = (month: number) => {
  if (!(MONTH_RANGE.MIN <= month && month <= MONTH_RANGE.MAX)) {
    return false;
  }
  return true;
};

export const isValidYear = (year: number) => {
  if (!(YEAR_RANGE.MIN <= year && year <= YEAR_RANGE.MAX)) {
    return false;
  }
  return true;
};
