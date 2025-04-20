import { ERROR_MESSAGES } from '../constants/errorMessages';
import { getCurrentMonth } from '../utils/getCurrentMonth';
import { getCurrentYear } from '../utils/getCurrentYear';

export const checkValidMonth = (value: string) => {
  if (Number(value) < 1 || Number(value) > 12) throw new Error(ERROR_MESSAGES.INVALID_MONTH_RANGE);
};

export const checkValidYear = (value: string) => {
  const currentYear = getCurrentYear().toString().slice(2);
  if (Number(value) < Number(currentYear)) {
    throw new Error(ERROR_MESSAGES.INVALID_YEAR);
  }
};

export const checkTotalExpirationDate = (month: string, year: string) => {
  const currentYear = getCurrentYear().toString().slice(2);
  const currentMonth = getCurrentMonth() + 1;

  if (currentYear === year && Number(month) < currentMonth) {
    throw new Error(ERROR_MESSAGES.INVALID_EXPIRATION);
  }
};
