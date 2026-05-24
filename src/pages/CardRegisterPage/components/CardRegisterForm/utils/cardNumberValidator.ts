import { ERROR_MESSAGES } from "../CardNumberField/constants";
import { type CardBrand } from "../../../../../domain/card/cardBrand";
import type { FieldErrorInformation } from "../shared/types";
import { getCardNumberLengthByBrand } from "../../../../../domain/card/cardNumber";

export const validateCardNumberChunk = (
  cardNumberChunk: string,
  expectedLength: number,
) => {
  const errorInformation: FieldErrorInformation = {
    isValid: true,
    errorMessage: null,
  };

  if (!isCardNumberChunkLengthValid(cardNumberChunk, expectedLength)) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = `카드 번호 ${expectedLength}자리를 입력해 주세요`;
  }

  return {
    isValid: errorInformation.isValid,
    errorMessage: errorInformation.errorMessage,
  };
};

export const isCardNumberChunkLengthValid = (
  cardNumberChunk: string,
  expectedLength: number,
) => {
  return cardNumberChunk.length === expectedLength;
};

export const validateCardNumber = (
  cardNumber: string,
  cardBrand: CardBrand,
) => {
  const errorInformation: FieldErrorInformation = {
    isValid: true,
    errorMessage: null,
  };

  if (cardNumber.length !== getCardNumberLengthByBrand(cardBrand)) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = ERROR_MESSAGES.INVALID_INPUT_LENGTH;
  }

  return {
    isValid: errorInformation.isValid,
    errorMessage: errorInformation.errorMessage,
  };
};

export const isCardNumberFieldValid = (
  cardNumber: string,
  cardBrand: CardBrand,
) => {
  return validateCardNumber(cardNumber, cardBrand).isValid;
};
