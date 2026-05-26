import {
  validateCardNumberLength,
  validateExpireDateNotPast,
  validateMonth,
  validateNumber,
} from './validator';
import { getCardNumberSegments } from '../../utils/cardNetwork';

export const isCardNumberComplete = (cardNumber: string[]): boolean => {
  const segments = getCardNumberSegments(cardNumber.join(''));

  if (cardNumber.length !== segments.length) return false;

  return (
    cardNumber.every((string, i) => string.length === segments[i]) &&
    cardNumber.every((string) => validateNumber(string).state) &&
    validateCardNumberLength(cardNumber).state
  );
};

export const isCardBrandComplete = (cardBrand: string): boolean => {
  return cardBrand !== '';
};

export const isExpireDateComplete = (expireDate: string[]): boolean => {
  return (
    expireDate.every((string) => string.length === 2) &&
    validateExpireDateNotPast(expireDate).state &&
    validateMonth(expireDate[0]).state
  );
};

export const isCvcComplete = (cvc: string): boolean => {
  return cvc.length === 3 && validateNumber(cvc).state;
};

export const isCardPasswordComplete = (password: string): boolean => {
  return password.length === 2 && validateNumber(password).state;
};
