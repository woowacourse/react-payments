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

export const CARD_NUMBERS_SEGMENT = {
  first: "first",
  second: "second",
  third: "third",
  fourth: "fourth",
} as const;

export const EXPIRATION_PERIOD_SEGMENT = {
  month: "month",
  year: "year",
} as const;

export type CardFormType = keyof typeof CARD_FORM_TYPE;
export type CardType = keyof typeof CARD_TYPE;
export type CardNumbersSegmentType = keyof typeof CARD_NUMBERS_SEGMENT;
export type ExpirationPeriodSegmentType =
  keyof typeof EXPIRATION_PERIOD_SEGMENT;

export type CardNumbersState = Record<CardNumbersSegmentType, string>;
export type ExpirationPeriodState = Record<ExpirationPeriodSegmentType, string>;
export type CvcNumberState = string;
export type CardCompanyState = string;
export type PasswordState = string;
