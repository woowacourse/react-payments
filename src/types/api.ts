
export interface Card {
  "id": string;
  "issuerCode": string;
  "number": string;
  "expirationDate": string;
}

export type AddCardErrorCode =
  | 'INVALID_CARD_NUMBER'
  | 'INVALID_CVC'
  | 'INVALID_EXPIRATION_DATE'
  | 'INVALID_ISSUER_CODE';

export interface AddCardSuccess {
  id: string;
}

export interface AddCardError {
  code: AddCardErrorCode;
  message: string
}

export type CardsResponse = Card[]