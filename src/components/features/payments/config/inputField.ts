export const CARD_NUMBER_INPUT_TYPE = {
  cardNumberPart1: 'cardNumberPart1',
  cardNumberPart2: 'cardNumberPart2',
  cardNumberPart3: 'cardNumberPart3',
  cardNumberPart4: 'cardNumberPart4',
} as const;
export type CardNumberInputType =
  (typeof CARD_NUMBER_INPUT_TYPE)[keyof typeof CARD_NUMBER_INPUT_TYPE];

export const EXPIRATION_DATE_INPUT_TYPE = {
  month: 'month',
  year: 'year',
} as const;
export type ExpirationDateInputType =
  (typeof EXPIRATION_DATE_INPUT_TYPE)[keyof typeof EXPIRATION_DATE_INPUT_TYPE];

export const EXPIRATION_DATE_INPUT_PLACEHOLDER: Record<
  ExpirationDateInputType,
  string
> = {
  month: 'MM',
  year: 'YY',
};
