// import { isNumericString, isValidMonth } from '../../core/utils/validator';
import { isNumericString } from '../../core/utils/validator';
import type { ExpirationDate } from './types';

import { validateFormValuesRules } from '@/core/hooks/validateFormValueRules';
import type { FormValuesRules } from '@/core/hooks/validateFormValueRules';

export const validateCardNumber = (cardNumber: string) => {
  if (!isNumericString(cardNumber)) return false;
  if (cardNumber.length !== 4) return false;
  return true;
};

export const validateExpirationDate = (expirationDate: ExpirationDate) => {
  const rules = {
    month: [
      { type: 'isRequired', message: '유효기간(월)는 필수값입니다' },
      { type: 'isNumericString', message: '유효기간(월)는 숫자여야합니다' },
      { type: 'isValidMonth', message: '유효기간(월)는 01부터 12까지의 숫자여야합니다' },
      { type: 'length', message: '유효기간(월)은 2자리여야합니다', length: 2 },
    ],
    year: [
      { type: 'isRequired', message: '유효기간(년)는 필수값입니다' },
      { type: 'isNumericString', message: '유효기간(년)는 숫자여야합니다' },
      { type: 'length', message: '유효기간(년)은 2자리여야합니다', length: 2 },
    ],
  } satisfies FormValuesRules<{ month: string; year: string }>;

  return validateFormValuesRules(expirationDate, rules);
};

export const validateCvc = ({ cvc }: { cvc: string }) => {
  const rules = {
    cvc: [
      { type: 'isRequired', message: 'CVC는 필수값입니다' },
      { type: 'isNumericString', message: 'CVC는 숫자여야합니다' },
      { type: 'length', message: 'CVC는 3자리여야합니다' },
    ],
  } satisfies FormValuesRules<{ cvc: string }>;

  return validateFormValuesRules({ cvc }, rules);
};
