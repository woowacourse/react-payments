export const INPUT_TYPE = {
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

export type InputType = keyof typeof INPUT_TYPE;
export type CardType = keyof typeof CARD_TYPE;
export type CardPositionType = keyof typeof CARD_POSITION;
export type PeriodPositionType = keyof typeof PERIOD_POSITION;

export interface CardNumbers {
  [CARD_POSITION.first]: string;
  [CARD_POSITION.second]: string;
  [CARD_POSITION.third]: string;
  [CARD_POSITION.fourth]: string;
}

export interface ExpirationPeriod {
  [PERIOD_POSITION.month]: string;
  [PERIOD_POSITION.year]: string;
}

export type CvcNumber = string;
