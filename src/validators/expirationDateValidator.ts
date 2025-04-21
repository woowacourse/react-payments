import { ERROR_MESSAGES } from './errorMessages';

export const checkValidMonth = (value: string) => {
  if (Number(value) < 1 || Number(value) > 12) throw new Error(ERROR_MESSAGES.INVALID_MONTH_RANGE);
};

export const getCurrentYear = (now: Date) => {
  return now.getFullYear();
};

export const getCurrentMonth = (now: Date) => {
  return now.getMonth();
};

export const checkValidYear = (value: string) => {
  const now = new Date();
  const currentYear = getCurrentYear(now) % 1000;
  if (Number(value) < Number(currentYear)) {
    throw new Error(ERROR_MESSAGES.INVALID_YEAR);
  }
};

export const checkTotalExpirationDate = (month: string, year: string) => {
  const now = new Date();
  const currentYear = getCurrentYear(now) % 1000;
  const currentMonth = getCurrentMonth(now) + 1;

  if (currentYear === Number(year) && Number(month) < currentMonth) {
    throw new Error(ERROR_MESSAGES.INVALID_EXPIRATION);
  }
};
