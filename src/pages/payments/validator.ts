// import { isNumericString, isValidMonth } from '../../core/utils/validator';
import { isNumericString, isValidMonth } from '../../core/utils/validator';
import type { ExpirationDate } from './types';

export const validateCardNumber = (cardNumber: string) => {
  if (!isNumericString(cardNumber)) return false;
  if (cardNumber.length !== 4) return false;
  return true;
};

const validateExpirationMonth = (month: string) => {
  return month.length === 2 && isNumericString(month) && isValidMonth(month);
};
const validateExpirationYear = (year: string) => {
  return year.length === 2 && isNumericString(year);
};

export const validateExpirationDate = (expirationDate: ExpirationDate) => {
  return {
    month: validateExpirationMonth(expirationDate.month),
    year: validateExpirationYear(expirationDate.year),
  };
};

export const validateCvc = ({ cvc }: { cvc: string }) => {
  const rules = [{ type: 'isRequired' }, { type: 'isNumericString' }, { type: 'min' }];

  return rules.every((rule) => {
    switch (rule.type) {
      case 'isRequired':
        return !!cvc;
      case 'isNumericString':
        return isNumericString(cvc);
      case 'min':
        return cvc.length === 3;
      default:
        return true;
    }
  });
};
