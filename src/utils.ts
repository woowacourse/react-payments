import type { CardBrand, CardInfo } from './types';

export const categorizeCardBrand = (cardNumbers: CardInfo['cardNumbers']): CardBrand => {
  const first = cardNumbers[0];
  if (!first) return 'local';

  if (first.startsWith('4')) {
    return 'visa';
  }
  const firstTwoNumber = Number.parseInt(first.slice(0, 2));
  if (firstTwoNumber >= 51 && firstTwoNumber <= 55) {
    return 'mastercard';
  }
  return 'local';
};

export const isNumber = (value: string) => {
  return /^\d+$/.test(value);
};

export const isValidMonth = (value: string) => {
  const num = Number(value);
  return Number.isInteger(num) && num >= 1 && num <= 12;
};

export const isValidYear = (value: string) => {
  const currentYear = new Date().getFullYear() % 100;
  const num = Number(value);
  return Number.isInteger(num) && num >= currentYear && num <= currentYear + 5;
};
