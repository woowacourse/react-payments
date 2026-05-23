export const CARD_REGISTER_SERVER_ERROR_CODES = [
  'INVALID_CARD_NUMBER',
  'INVALID_EXPIRATION_DATE',
  'INVALID_CVC',
] as const;

export type CardRegisterServerErrorCode =
  (typeof CARD_REGISTER_SERVER_ERROR_CODES)[number];
