import type { CardBrand, CardInfo } from './types';

export const categorizeCardBrand = (cardNumbers: CardInfo['cardNumbers']): CardBrand => {
  return 'visa';
};

export const isNumber = (value: string) => {
  return /^\d+$/.test(value);
};
