import { ERROR_MESSAGES } from '../constants/errorMessages';

export const checkValidMonth = (value: string) => {
  if (Number(value) < 1 || Number(value) > 12) throw new Error(ERROR_MESSAGES.INVALID_MONTH_RANGE);
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getCurrentMonth = () => {
  return new Date().getMonth();
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
