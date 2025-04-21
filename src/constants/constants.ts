export const MAGIC_NUMBER = {
  placeholders: {
    cardNumber: "1234",
    month: "MM",
    year: "YY",
    cvcNumber: "123",
  },
  maxLength: {
    cardNumber: 4,
    expirationPeriod: 2,
    cvcNumber: 3,
  },
};

export const INPUT_TYPE = {
  cardNumbers: "cardNumbers",
  expirationPeriod: "expirationPeriod",
  cvcNumber: "cvcNumber",
} as const;

export const CARD_IMAGE = {
  visa: "./visa.svg",
  mastercard: "./mastercard.svg",
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
export type CardImageType = keyof typeof CARD_IMAGE;
export type CardPositionType = keyof typeof CARD_POSITION;
export type PeriodPositionType = keyof typeof PERIOD_POSITION;
