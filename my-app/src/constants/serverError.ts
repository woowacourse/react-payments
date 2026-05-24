export const CARD_SERVER_ERROR_FIELD = {
  INVALID_CARD_NUMBER: 'cardNumber',
  INVALID_CVC: 'cardCvc',
  INVALID_EXPIRATION_DATE: 'cardExpirationDate',
} as const;

export type CardServerErrorCode = keyof typeof CARD_SERVER_ERROR_FIELD;
export type CardServerErrorField =
  (typeof CARD_SERVER_ERROR_FIELD)[CardServerErrorCode];

export interface CardServerErrorResponse {
  code: CardServerErrorCode;
  message: string;
}

export type CardServerErrors = Partial<Record<CardServerErrorField, string>>;

export function isCardServerErrorResponse(
  error: unknown,
): error is CardServerErrorResponse {
  if (typeof error !== 'object' || error === null) {
    return false;
  }

  const { code, message } = error as Partial<CardServerErrorResponse>;

  return (
    typeof code === 'string' &&
    code in CARD_SERVER_ERROR_FIELD &&
    typeof message === 'string'
  );
}
