import type { CardBrand, CardCompany, CardInfo } from './types';
import { CARD_COMPANIES } from './constants.ts';

export const chunkString = (value: string, size: number) => {
  const chunked: string[] = [];

  for (let i = 0; i < value.length; i += size) {
    chunked.push(value.slice(i, i + size));
  }

  return chunked;
};

export const categorizeCardBrand = (cardNumbers: CardInfo['cardNumbers']): CardBrand => {
  const numbers = cardNumbers.join('');

  if (numbers.length === 0) {
    return 'local';
  }

  if (numbers.startsWith('4')) {
    return 'visa';
  }

  const firstTwoNumbers = parsePrefixNumber(numbers, 2);
  if (firstTwoNumbers >= 51 && firstTwoNumbers <= 55) {
    return 'mastercard';
  }

  if (firstTwoNumbers === 36) {
    return 'diners';
  }

  if (firstTwoNumbers === 34 || firstTwoNumbers === 37) {
    return 'amex';
  }

  const firstSixNumbers = parsePrefixNumber(numbers, 6);
  if (firstSixNumbers >= 622126 && firstSixNumbers <= 622925) {
    return 'unionpay';
  }

  if (firstSixNumbers >= 624000 && firstSixNumbers <= 626999) {
    return 'unionpay';
  }

  if (firstSixNumbers >= 628200 && firstSixNumbers <= 628899) {
    return 'unionpay';
  }

  return 'local';
};

const parsePrefixNumber = (str: string, n: number) => Number.parseInt(str.slice(0, n));

export const sanitizeNumber = (input: string) => {
  return input.replace(/[^0-9]/g, '');
};

export const getCardCompanyFromIssuerCode = (issuerCode: string) => {
  return CARD_COMPANIES[issuerCode].kr;
};

export const getIssuerCodeFromCardCompany = (cardCompany: CardCompany) => {
  return Object.keys(CARD_COMPANIES).find((key) => CARD_COMPANIES[key].kr === cardCompany) ?? null;
};
