import type { CardBrand, CardInfo } from './pages/AddCardPage';

export const categorizeCardBrand = (cardNumbers: CardInfo['cardNumbers']): CardBrand => {
  return 'visa';
};

export const isNumber = (value: string) => {
  return /^\d+$/.test(value);
};
