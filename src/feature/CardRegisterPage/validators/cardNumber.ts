import type { CardBrandType } from "../../../shared/types/CardBrand";
import { CARD, ERROR_MESSAGES } from "../constants";
import type { ErrorInformationType } from "./ErrorInformationType";

export const validateCardNumberChunk = (
  cardNumberChunk: string,
  expectedLength: number,
) => {
  const errorInformation: ErrorInformationType = {
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
  cardBrand: CardBrandType,
) => {
  const errorInformation: ErrorInformationType = {
    isValid: true,
    errorMessage: null,
  };

  if (cardNumber.length !== getCardNumberLength(cardBrand)) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = ERROR_MESSAGES.cardNumber;
  }

  return {
    isValid: errorInformation.isValid,
    errorMessage: errorInformation.errorMessage,
  };
};

export const isCardNumberFieldValid = (
  cardNumber: string,
  cardBrand: CardBrandType,
) => {
  return validateCardNumber(cardNumber, cardBrand).isValid;
};

const getCardNumberLength = (cardBrand: CardBrandType) => {
  if (cardBrand === "visa") {
    return CARD.VISA.LENGTH;
  }
  if (cardBrand === "masterCard") {
    return CARD.MASTERCARD.LENGTH;
  }
  if (cardBrand === "diners") {
    return CARD.DINER.LENGTH;
  }
  if (cardBrand === "amex") {
    return CARD.AMEX.LENGTH;
  }
  if (cardBrand === "unionPay") {
    return CARD.UNION_PAY.LENGTH;
  }

  return CARD.DEFAULT.LENGTH;
};
