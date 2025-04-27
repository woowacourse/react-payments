export const CARD_NUMBER_INPUT_TYPE = [
  'cardNumberPart1',
  'cardNumberPart2',
  'cardNumberPart3',
  'cardNumberPart4',
] as const;
export type CardNumberInputType = (typeof CARD_NUMBER_INPUT_TYPE)[number];

export const EXPIRATION_DATE_INPUT_PLACEHOLDER: Record<
  ExpirationDateInputType,
  string
> = {
  expirationDatePart1: 'MM',
  expirationDatePart2: 'YY',
};

export const EXPIRATION_DATE_INPUT_TYPE = [
  'expirationDatePart1',
  'expirationDatePart2',
] as const;
export type ExpirationDateInputType =
  (typeof EXPIRATION_DATE_INPUT_TYPE)[number];

export const CVC_INPUT_TYPE = ['CVCPart1'] as const;
export type CVCInputValueType = (typeof CVC_INPUT_TYPE)[number];

export const CARD_ISSUER_TYPE = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;
export type CardIssuerSelectorType = (typeof CARD_ISSUER_TYPE)[number];

export const PASSWORD_INPUT_TYPE = ['passwordPart1'] as const;
export type PasswordInputType = (typeof PASSWORD_INPUT_TYPE)[number];

export type FieldName = 'cardNumber' | 'expirationDate' | 'CVC' | 'password';

export type InputFieldType =
  | CardNumberInputType
  | CVCInputValueType
  | ExpirationDateInputType
  | PasswordInputType;

export const INPUT_FIELD_MAX_LENGTH: Record<FieldName, number> = {
  cardNumber: 4,
  CVC: 3,
  expirationDate: 2,
  password: 2,
};
