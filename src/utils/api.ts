import { HttpResponse } from "msw";
import { ERROR_MESSAGE, UNMASKED_CARD_NUMBER_END_COUNT, UNMASKED_CARD_NUMBER_START_COUNT } from "../constants/api";
import type { AddCardErrorCode } from "../types/api";
import { getCardNetwork, validateDigits, validateMonth, validateStringLength } from ".";
import { CARD_EXPIRY_YEAR_LENGTH, CARD_ISSUER_CODES, CARD_NETWORK } from "../constants";

export function createErrorResponse(code: AddCardErrorCode) {
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
  return cardNumber.slice(0, UNMASKED_CARD_NUMBER_START_COUNT)
    + Array.from({ length: cardNumber.length - UNMASKED_CARD_NUMBER_START_COUNT - UNMASKED_CARD_NUMBER_END_COUNT }).map(() => "*").join("")
    + cardNumber.slice(-UNMASKED_CARD_NUMBER_END_COUNT)
}