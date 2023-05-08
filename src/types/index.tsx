import ANIMATION from '@Constants/Animation';
import { CARD_COMPANY, CARD_COMPANY_NAMES } from '@Constants/CardCompany';

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

export type Company = {
  name: string;
  logo: string;
  uniqueColor: string;
  gradientColor: string;
  fontColor: string;
};

export type CompanyNames = (typeof CARD_COMPANY_NAMES)[number];

export type CreditCardCompanies = keyof typeof CARD_COMPANY;

export type AnimationTypes = keyof typeof ANIMATION;

export type ValidationErrorType = { message: string; type: 'char' | 'length' | 'range' };

export type ValidationFnReturnType = { ok: true } | { ok: false; error: ValidationErrorType };

export type ValidationFn<T> = (value: T) => ValidationFnReturnType;
