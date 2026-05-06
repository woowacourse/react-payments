// import { isNumericString, isValidMonth } from '../../core/utils/validator';
import { isNumericString, isValidMonth } from '../../core/utils/validator';
import type { ExpirationDate } from './types';

import { validateFormValuesRules } from '@/core/hooks/validateFormValueRules';

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
    cvc: [
      { type: 'isRequired', message: 'CVC는 필수값입니다' },
      { type: 'isNumericString', message: 'CVC는 숫자여야합니다' },
      { type: 'length', message: 'CVC는 3자리여야합니다' },
    ],
  };

  return validateFormValuesRules({ cvc }, rules);
};
