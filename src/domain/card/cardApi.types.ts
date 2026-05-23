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

export const CARD_ERROR_MESSAGES = {
  INVALID_CARD_NUMBER: '유효하지 않은 카드 번호입니다.',
  INVALID_CVC: '유효하지 않은 CVC입니다.',
  INVALID_EXPIRATION_DATE: '유효하지 않은 만료일입니다.',
  INVALID_ISSUER_CODE: '지원하지 않는 카드사입니다.',
} as const satisfies Record<CardErrorCode, string>;

export const CARD_ERROR_CODES = Object.keys(CARD_ERROR_MESSAGES) as CardErrorCode[];

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
