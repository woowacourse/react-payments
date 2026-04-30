import type { CardBrand, CardInfo } from './types';

export const categorizeCardBrand = (cardNumbers: CardInfo['cardNumbers']): CardBrand => {
  if (cardNumbers[0].startsWith('4')) {
    return 'visa';
  }
  const firstTwoNumber = Number.parseInt(cardNumbers[0].slice(0, 2));
  if (firstTwoNumber >= 51 && firstTwoNumber <= 55) {
    return 'mastercard';
  }
  return 'local';
};

export const isNumber = (value: string) => {
  return /^\d+$/.test(value);
};
