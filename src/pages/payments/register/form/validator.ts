import type { ExpirationDate } from './types';

import { validateFormValuesRules } from '@/core/hooks/validateFormValueRules';
import type { Rule, FormValuesRules } from '@/core/hooks/validateFormValueRules';

import { isEmptyString, isNumericString } from '@/core/utils/validator';

type CardNumbers = {
  [key in '0' | '1' | '2' | '3']: string;
};

export const validateCardNumbers = (cardNumbers: CardNumbers) => {
  const rule = [
    { type: 'isRequired', message: '카드번호는 필수값입니다' },
    { type: 'isNumericString', message: '카드번호는 숫자여야합니다' },
    { type: 'length', message: '카드번호는 한칸당 4자리여야합니다', length: 4 },
  ] as Rule[];

  const rules = {
    '0': rule,
    '1': rule,
    '2': rule,
    '3': rule,
  } satisfies FormValuesRules<CardNumbers>;

  return validateFormValuesRules(cardNumbers, rules);
};

export const preventCardNumber = (cardNumber: string) => {
  if (isEmptyString(cardNumber)) return false;

  if (!isNumericString(cardNumber)) return true;
  if (cardNumber.length > 4) return true;

  return false;
};

export const validateCard = ({ card }: { card: string }) => {
  const rules = {
    card: [{ type: 'isRequired', message: '카드사는 필수값입니다' }],
  } satisfies FormValuesRules<{ card: string }>;

  return validateFormValuesRules({ card }, rules);
};

export const preventCard = (value: unknown) => {
  return false;
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

export const preventExpirationMonth = (month: string) => {
  if (isEmptyString(month)) return false;

  if (!isNumericString(month)) return true;
  if (month.length > 2) return true;

  return false;
};

export const preventExpirationYear = (year: string) => {
  if (isEmptyString(year)) return false;

  if (!isNumericString(year)) return true;
  if (year.length > 2) return true;

  return false;
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

export const preventCvc = (cvc: string) => {
  if (isEmptyString(cvc)) return false;

  if (!isNumericString(cvc)) return true;
  if (cvc.length > 3) return true;

  return false;
};

export const validatePassword = ({ password }: { password: string }) => {
  const rules = {
    password: [
      { type: 'isRequired', message: '비밀번호는 필수값입니다' },
      { type: 'isNumericString', message: '비밀번호는 숫자여야합니다' },
      { type: 'length', message: '비밀번호는 2자리여야합니다', length: 2 },
    ],
  } satisfies FormValuesRules<{ password: string }>;

  return validateFormValuesRules({ password }, rules);
};

export const preventPassword = (password: string) => {
  if (isEmptyString(password)) return false;

  if (!isNumericString(password)) return true;
  if (password.length > 2) return true;

  return false;
};
