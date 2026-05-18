import type { BaseValidationRule, CardBrand, CardInfo, ExpirationValidationRule, ValidationTrigger } from './types';

export const validate = <R extends BaseValidationRule | ExpirationValidationRule>(
  rules: R[],
  trigger: ValidationTrigger,
  value: string,
): R['name'] | null => {
  const targetRules = rules.filter((rule) => rule.on.includes(trigger));

  for (const rule of targetRules) {
    const isValid = rule.fn(value);
    if (!isValid) {
      return rule.name;
    }
  }

  return null;
};

export const validateAll = <R extends BaseValidationRule | ExpirationValidationRule>(
  rules: R[],
  value: string,
): R['name'] | null => {
  for (const rule of rules) {
    const isValid = rule.fn(value);
    if (!isValid) {
      return rule.name;
    }
  }

  return null;
};

export const categorizeCardBrand = (cardNumbers: CardInfo['cardNumbers']): CardBrand => {
  const first = cardNumbers[0];
  if (!first) return 'local';

  if (first.startsWith('4')) return 'visa';

  const firstTwo = Number.parseInt(first.slice(0, 2));
  if (firstTwo >= 51 && firstTwo <= 55) return 'mastercard';
  if (firstTwo === 34 || firstTwo === 37) return 'amex';
  if (firstTwo === 36) return 'diners';

  const firstSix = Number.parseInt(first.padEnd(6, '0').slice(0, 6));
  if (firstSix >= 622126 && firstSix <= 622925) return 'unionpay';

  const firstThree = Number.parseInt(first.padEnd(3, '0').slice(0, 3));
  if (firstThree >= 624 && firstThree <= 626) return 'unionpay';

  const firstFour = Number.parseInt(first.padEnd(4, '0').slice(0, 4));
  if (firstFour >= 6282 && firstFour <= 6288) return 'unionpay';

  return 'local';
};

export const isNumber = (value: string) => {
  return /^\d+$/.test(value);
};

export const isValidMonth = (month: string) => {
  const num = Number(month);
  return Number.isInteger(num) && num >= 1 && num <= 12;
};

export const isValidYear = (year: string) => {
  const num = Number(year);
  return Number.isInteger(num) && num >= 0 && num <= 99;
};

export const isValidMonthAndYear = (month: string, year: string) => {
  const currentDate = new Date();
  const currentFullYear = currentDate.getFullYear();
  const currentYear = currentFullYear % 100;
  const century = currentFullYear - currentYear;
  const currentMonth = currentDate.getMonth() + 1;

  const numYear = Number(year);
  const numMonth = Number(month);

  if (
    !Number.isInteger(numMonth) ||
    numMonth < 1 ||
    numMonth > 12 ||
    !Number.isInteger(numYear) ||
    numYear < 0 ||
    numYear > 99
  )
    return false;

  const fullYear = century + numYear;

  if (fullYear < currentFullYear || fullYear > currentFullYear + 5) return false;
  if (fullYear === currentFullYear && numMonth < currentMonth) return false;

  return true;
};
