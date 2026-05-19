export type CreateCardRequest = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

export type CreateCardResponse = {
  id: string;
};

export type CardResponse = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
};

export type CardErrorCode =
  | 'INVALID_CARD_NUMBER'
  | 'INVALID_CVC'
  | 'INVALID_EXPIRATION_DATE'
  | 'INVALID_ISSUER_CODE';

export type CardFieldErrorResponse = {
  type: 'field';
  code: CardErrorCode;
  message: string;
};

export type UnknownCardApiError = {
  type: 'unknown';
  message: string;
};

export type CardErrorResponse = CardFieldErrorResponse | UnknownCardApiError;
