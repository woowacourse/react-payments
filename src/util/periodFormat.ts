import { VALIDATION } from '../constants/validation';
import { isValueInRange } from './isValueInRange';

export const monthFormat = (month: string) => {
  const monthNumber = Number(month);
  if (isValueInRange(monthNumber, VALIDATION.singleDigit.min, VALIDATION.singleDigit.max)) {
    return '0'.repeat(2 - month.length) + month;
  }
  return month;
};

export const yearFormat = (year: string) => {
  if (year) return '/ ' + year;
};
