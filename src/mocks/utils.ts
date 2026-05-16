import { HttpResponse } from 'msw';
import { CARD_EXPIRY_YEAR_LENGTH, CARD_ISSUER_CODES, CARD_NETWORK } from '../constants';
import {
  getCardNetwork,
  validateDigits,
  validateMonth,
  validateStringLength,
} from '../utils';

export type ErrorCode =
  | 'INVALID_CARD_NUMBER'
  | 'INVALID_CVC'
  | 'INVALID_EXPIRATION_DATE'
  | 'INVALID_ISSUER_CODE';

const ERROR_MESSAGE: Record<ErrorCode, string> = {
  INVALID_CARD_NUMBER: '유효하지 않은 카드 번호입니다.',
  INVALID_CVC: '유효하지 않은 CVC입니다.',
  INVALID_EXPIRATION_DATE: '유효하지 않은 만료일입니다.',
  INVALID_ISSUER_CODE: '지원하지 않는 카드사입니다.',
};

export function createErrorResponse(code: ErrorCode) {
  return HttpResponse.json({ code, message: ERROR_MESSAGE[code] }, { status: 400 });
}

export function validateCardNumber(cardNumber: string) {
  const cardNetwork = getCardNetwork([cardNumber]);

  if (cardNetwork === null) return false;

  return validateDigits(cardNumber)
    && validateStringLength(cardNumber, CARD_NETWORK[cardNetwork].cardNumberLength);
}

export function validateCardCVC(cvc: string) {
  return validateDigits(cvc)
    && (validateStringLength(cvc, 3) || validateStringLength(cvc, 4))
    && !/^0{3,4}$/.test(cvc);
}

export function validateExpirationDate(expirationDate: string) {
  const [month, year, ...rest] = expirationDate.split("/");

  return rest.length === 0
    && month !== undefined
    && year !== undefined
    && validateMonth(month)
    && validateStringLength(year, CARD_EXPIRY_YEAR_LENGTH)
    && validateDigits(year);
}

export function validateCardIssuerCode(issuerCode: string) {
  return CARD_ISSUER_CODES.some((cardIssuerCode) => cardIssuerCode === issuerCode);
}

export function maskCardNumber(cardNumber: string) {
  return `${cardNumber.slice(0, 6)}******${cardNumber.slice(-4)}`;
}
