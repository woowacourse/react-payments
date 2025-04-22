import { HandleInputParams } from '../components/CardPage/CardPage';
import { ERROR_MESSAGES } from './errorMessages';
import { checkNumber, checkValidLength } from './inputValidator';

export const checkValidMonth = (value: string) => {
  if (Number(value) < 1 || Number(value) > 12) throw new Error(ERROR_MESSAGES.INVALID_MONTH_RANGE);
};

export const getCurrentYear = (date = new Date()) => {
  return date.getFullYear();
};

export const getCurrentMonth = (date = new Date()) => {
  return date.getMonth();
};

export const checkValidYear = (value: string) => {
  const currentYear = getCurrentYear() % 1000;
  if (Number(value) < Number(currentYear)) {
    throw new Error(ERROR_MESSAGES.INVALID_YEAR);
  }
};

export const checkTotalExpirationDate = (month: string, year: string) => {
  const currentYear = getCurrentYear() % 1000;
  const currentMonth = getCurrentMonth() + 1;

  if (currentYear === Number(year) && Number(month) < currentMonth) {
    throw new Error(ERROR_MESSAGES.INVALID_EXPIRATION);
  }
};

export const expirationDateValidation = (
  values: string[],
  { e, idx }: HandleInputParams,
  validLength: number
) => {
  const expDateValue = e.target.value;
  checkNumber(expDateValue);
  checkValidLength(expDateValue, validLength);

  if (idx === 0) {
    checkValidMonth(expDateValue);
  } else if (idx === 1) {
    checkValidYear(expDateValue);
  }
  const updatedValues = [...values];
  updatedValues[idx] = expDateValue;

  if (updatedValues[0] && updatedValues[1]) {
    checkTotalExpirationDate(updatedValues[0], updatedValues[1]);
  }
};
