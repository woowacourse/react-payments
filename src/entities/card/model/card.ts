export interface Card {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

export type CardListResponse = Card[];

export type DeleteCardResponse = void;

export interface RegisterCardRequest {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

export interface RegisterCardResponse {
  id: string;
}

export type RegisterCardErrorCode =
  | 'INVALID_CARD_NUMBER'
  | 'INVALID_CVC'
  | 'INVALID_EXPIRATION_DATE';

export interface RegisterCardErrorResponse {
  code: RegisterCardErrorCode;
  message: string;
}

export type RegisterCardResult =
  | { ok: true; data: RegisterCardResponse }
  | { ok: false; error: RegisterCardErrorResponse };
