import ANIMATION from '@Constants/Animation';
import CARD_COMPANY from '@Constants/CardCompany';

export type CreditCardPasswordType = {
  first: string;
  second: string;
};

export type CreditCard = {
  id: number;
  numbers: string;
  expiry: string;
  owner?: string;
  cvc: string;
  password: CreditCardPasswordType;
  company?: CreditCardCompanies;
  alias: string;
};

export type CreditCardCompanies = keyof typeof CARD_COMPANY;

export type AnimationTypes = keyof typeof ANIMATION;

export type ValidationErrorType = { message: string; type: 'char' | 'length' | 'range' };

export type ValidationFnReturnType = { ok: true } | { ok: false; error: ValidationErrorType };

export type ValidationFn<T> = (value: T) => ValidationFnReturnType;
