import { isNumericString, isValidMonth } from '@/core/utils/validator';
import { BRAND_CARD_LENGTH, getBrand } from './brand';
import { ExpirationDate } from '@/pages/payments/index';

export const validateCardNumber = (cardNumbers: string) => {
  const brand = getBrand(cardNumbers);

  if (cardNumbers.length !== BRAND_CARD_LENGTH[brand]) return false;
  if (!isNumericString(cardNumbers)) return false;

  return true;
};

const validateExpirationMonth = (month: string) => {
  if (month.length !== 2) return false;
  if (!isNumericString(month)) return false;
  if (!isValidMonth(month)) return false;
  return true;
};

const validateExpirationYear = (year: string) => {
  if (year.length !== 2) return false;
  if (!isNumericString(year)) return false;
  return true;
};

export const validateExpirationDate = (expirationDate: ExpirationDate) => {
  return {
    month: validateExpirationMonth(expirationDate.month),
    year: validateExpirationYear(expirationDate.year),
  };
};

export const validateCvc = (cvc: string) => {
  if (cvc.length !== 3) return false;
  if (!isNumericString(cvc)) return false;
  return true;
};
