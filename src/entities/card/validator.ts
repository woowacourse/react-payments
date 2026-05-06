import { isNumericString, isValidMonth } from '@/core/utils/validator';
import { BRAND_CARD_LENGTH } from './brand';
import type { ExpirationDate } from '@/entities/card/types';
import type { Brand } from '@/entities/card/brand';

// 카드번호
export const validateCardNumbers = (cardNumbers: string, brand: Brand) => {
  if (cardNumbers.length !== BRAND_CARD_LENGTH[brand]) return false;
  if (!isNumericString(cardNumbers)) return false;
  return true;
};

// 유효기간

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

// CVC

export const validateCvc = (cvc: string) => {
  if (cvc.length !== 3) return false;
  if (!isNumericString(cvc)) return false;
  return true;
};
