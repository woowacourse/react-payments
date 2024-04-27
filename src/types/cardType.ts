import { ChangeEvent } from 'react';
import ISSUER_COLOR from '../constants/issuerColor';

export const cardBrand = {
  visa: 'visa',
  masterCard: 'masterCard',
  noneImage: 'noneImage',
} as const;

type Union<T> = T[keyof T];

export type CardBrandType = Union<typeof cardBrand>;

export type CardNumberType = {
  number_1: string;
  number_2: string;
  number_3: string;
  number_4: string;
};

export type PeriodType = {
  month: string;
  year: string;
};

export type OwnerType = {
  owner: string;
};

export type CVCType = {
  cvc: string;
};

export type PasswordType = {
  password: string;
};
export type Validation = (value: string) => void;
export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void;

export type CardNumberKeys = keyof CardNumberType;
export type PeriodKeys = keyof PeriodType;
export type OwnerKeys = keyof OwnerType;
export type CVCKeys = keyof CVCType;
export type PasswordKeys = keyof PasswordType;

export type AllKeysType = CardNumberKeys | PeriodKeys | OwnerKeys | CVCKeys | PasswordKeys;

export type CardNumberErrorType = {
  [P in keyof CardNumberType]?: string;
};

export type PeriodErrorType = {
  [P in keyof PeriodType]?: string;
};

export type OwnerErrorType = {
  [P in keyof OwnerType]?: string;
};
export type CVCErrorType = {
  [P in keyof CVCType]?: string;
};

export type PasswordErrorType = {
  [P in keyof PasswordType]?: string;
};
export type ErrorCardType = CardNumberErrorType | PeriodErrorType | OwnerErrorType | CVCErrorType | PasswordErrorType;

export type IssuerType = keyof typeof ISSUER_COLOR;
