export const CARD_NUMBER_INPUT_TYPE = [
  'cardNumberPart1',
  'cardNumberPart2',
  'cardNumberPart3',
  'cardNumberPart4',
] as const;
export type CardNumberInputType = (typeof CARD_NUMBER_INPUT_TYPE)[number];

export const EXPIRATION_DATE_INPUT_TYPE = [
  'expirationDatePart1',
  'expirationDatePart2',
] as const;
export type ExpirationDateInputType =
  (typeof EXPIRATION_DATE_INPUT_TYPE)[number];

export const EXPIRATION_DATE_INPUT_PLACEHOLDER: Record<
  ExpirationDateInputType,
  string
> = {
  expirationDatePart1: 'MM',
  expirationDatePart2: 'YY',
};

export type CVCInputValueType = 'CVCPart1';
