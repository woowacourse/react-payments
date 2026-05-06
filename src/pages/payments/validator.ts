// import { isNumericString, isValidMonth } from '../../core/utils/validator';
import { isNumericString, isValidMonth } from '../../core/utils/validator';
import type { ExpirationDate } from './types';

import { validateRules } from '@/core/hooks/validateRules';

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
  const rules = {
    cvc: [{ type: 'isRequired' }, { type: 'isNumericString' }, { type: 'min' }],
  };

  return validateRules({ cvc }, rules);
};
