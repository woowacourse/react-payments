import { isRequired, isNumericString, isValidMonth, min } from '../utils/validator';

interface Rule {
  type: string;
}

export const validateRules = <T extends string>(value: T, rules: Rule[]) => {
  return rules.every((rule) => {
    switch (rule.type) {
      case 'isRequired':
        return isRequired(value);
      case 'isNumericString':
        return isNumericString(value);
      case 'isValidMonth':
        return isValidMonth(value);
      case 'min':
        return min(value, 3);
      default:
        return true;
    }
  });
};
