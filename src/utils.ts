import type { CardBrand, CardInfo } from './types';

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

const parsePrefixNumber = (str, n) => Number.parseInt(str.slice(0, n));

export const sanitizeNumber = (input: string) => {
  return input.replace(/[^0-9]/g, '');
};
