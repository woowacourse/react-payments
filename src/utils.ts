import type { CardBrand, CardInfo, Validate } from './types';

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

export const getActiveError = <T>(
  rules: Validate<T>[],
  inputValue: string,
  eventType: 'change' | 'blur',
  index?: number,
) => {
  const activeRule = rules.filter((rule) => rule.type.includes(eventType)).find((rule) => rule.rule(inputValue, index));

  return activeRule?.errorStatus ?? null;
};
