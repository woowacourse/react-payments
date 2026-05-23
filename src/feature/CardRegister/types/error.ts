export type ServerFieldErrors = {
  cardNumber?: string;
  expirationDate?: string;
  cvc?: string;
};

export const SERVER_ERROR_FIELD_MAP = {
  INVALID_CARD_NUMBER: 'cardNumber',
  INVALID_EXPIRATION_DATE: 'expirationDate',
  INVALID_CVC: 'cvc',
} as const;
