export const CARD_FORM_TYPE = {
  cardNumbers: "cardNumbers",
  expirationPeriod: "expirationPeriod",
  cvcNumber: "cvcNumber",
  cardCompany: "cardCompany",
  password: "password",
} as const;

export const CARD_TYPE = {
  visa: "visa",
  master: "master",
} as const;

export const CARD_POSITION = {
  first: "first",
  second: "second",
  third: "third",
  fourth: "fourth",
} as const;

export const PERIOD_POSITION = {
  month: "month",
  year: "year",
} as const;

export type CardFormType = keyof typeof CARD_FORM_TYPE;
export type CardType = keyof typeof CARD_TYPE;
export type CardPositionType = keyof typeof CARD_POSITION;
export type PeriodPositionType = keyof typeof PERIOD_POSITION;

export type CardNumbersState = Record<CardPositionType, string>;
export type ExpirationPeriodState = Record<PeriodPositionType, string>;
export type CvcNumberState = string;
export type CardCompanyState = string;
export type PasswordState = string;
