import { ERROR_MESSAGES } from '../constants/errorMessages';
import { getCurrentMonth } from '../utils/getCurrentMonth';
import { getCurrentYear } from '../utils/getCurrentYear';
import MonthError from './errors/MonthError';
import TotalDateError from './errors/TotalDateError';
import YearError from './errors/YearError';

export const checkValidMonth = (value: string) => {
  if (Number(value) < 1 || Number(value) > 12)
    throw new MonthError(ERROR_MESSAGES.INVALID_MONTH_RANGE);
};

export const checkValidYear = (value: string) => {
  const currentYear = getCurrentYear().toString().slice(2);
  if (Number(value) < Number(currentYear)) {
    throw new YearError(ERROR_MESSAGES.INVALID_YEAR);
  }
};

export const checkTotalExpirationDate = (month: string, year: string) => {
  const currentYear = getCurrentYear().toString().slice(2);
  const currentMonth = getCurrentMonth() + 1;

  if (currentYear === year && Number(month) < currentMonth) {
    throw new TotalDateError(ERROR_MESSAGES.INVALID_EXPIRATION);
  }
};
