import { ERROR_MESSAGES } from '../constants/errorMessages';

type EXPIRED_TYPE = 'INVALID_MONTH' | 'INVALID_YEAR' | false;

export const checkExpired = (month: string, year: string): EXPIRED_TYPE => {
  if (year.length < 2 || month.length < 2) return false;
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear() - 2000;

  if (Number(year) === todayYear && Number(month) < todayMonth) {
    return 'INVALID_MONTH';
  }

  if (Number(year) < todayYear) {
    return 'INVALID_YEAR';
  }

  return false;
};

export const checkValidMonth = (month: string, isExpiredDate: EXPIRED_TYPE) => {
  if (isNaN(Number(month))) return ERROR_MESSAGES.NOT_NUMBER;
  if (Number(month) <= 0 || Number(month) > 12) return ERROR_MESSAGES.INVALID_DATE;
  if (isExpiredDate === 'INVALID_MONTH') return ERROR_MESSAGES.EXPIRED_DATE;
  return '';
};

export const checkValidYear = (year: string, isExpiredDate: EXPIRED_TYPE) => {
  if (isNaN(Number(year))) return ERROR_MESSAGES.NOT_NUMBER;
  if (year.length > 0 && year.length < 2) return ERROR_MESSAGES.INVALID_DATE;
  if (isExpiredDate === 'INVALID_YEAR') return ERROR_MESSAGES.EXPIRED_DATE;
  return '';
};

export const isValidDate = (month: string, year: string) => {
  const isExpiredDate = checkExpired(month, year);

  const monthErrorMessage = checkValidMonth(month, isExpiredDate);
  const yearErrorMessage = checkValidYear(year, isExpiredDate);

  return !isExpiredDate && monthErrorMessage === '' && yearErrorMessage === '' && month.length >= 2 && year.length >= 2;
};
