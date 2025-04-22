export const CARD_INPUT_TYPE = {
  cardNumbers: "cardNumbers",
  expirationPeriod: "expirationPeriod",
  cvcNumber: "cvcNumber",
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

export type CardInputType = keyof typeof CARD_INPUT_TYPE;
export type CardType = keyof typeof CARD_TYPE;
export type CardPositionType = keyof typeof CARD_POSITION;
export type PeriodPositionType = keyof typeof PERIOD_POSITION;

export type CardNumbers = Record<CardPositionType, string>;
export type ExpirationPeriod = Record<PeriodPositionType, string>;

export type CvcNumber = string;
