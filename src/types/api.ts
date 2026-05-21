export type RegisterCardRequest = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

export type RegisterCardResponse = {
  id: string;
};

export type CardResponse = RegisterCardResponse & {
  issuerCode: string;
  number: string;
  expirationDate: string;
};

export type CardApiErrorCode =
  | 'INVALID_CARD_NUMBER'
  | 'INVALID_CVC'
  | 'INVALID_EXPIRATION_DATE';

export type CardApiError = {
  code: CardApiErrorCode;
  message: string;
};

export type CardFormApiError = {
  code: 'cardNumbers' | 'expiryDate' | 'cvc' | 'password';
  message: string;
};
