// import { isNumericString, isValidMonth } from '../../core/utils/validator';
import { isNumericString, isValidMonth } from '../../core/utils/validator';
import type { ExpirationDate } from './types';

export const validateCardNumber = (cardNumber: string) => {
  if (!isNumericString(cardNumber)) return false;
  if (cardNumber.length !== 4) return false;
  return true;
};

const validateExpirationMonth = (month: string) => {
  return month.length === 2 && isNumericString(month);
};
const validateExpirationYear = (year: string) => {
  return year.length === 2 && isNumericString(year) && isValidMonth(year);
};

export const validateExpirationDate = (expirationDate: ExpirationDate) => {
  return {
    month: validateExpirationMonth(expirationDate.month),
    year: validateExpirationYear(expirationDate.year),
  };
};

export const validateCvc = (cvc: string) => {
  return cvc.length === 3 && isNumericString(cvc);
};
