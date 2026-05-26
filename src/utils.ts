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
