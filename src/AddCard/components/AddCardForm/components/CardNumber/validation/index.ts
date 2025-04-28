import { CARD_NUMBER_LENGTH } from "../constants";
import { CARD_NUMBER_ERROR_MESSAGE } from "../constants";

export const validateCardNumber = (cardNumber: string) => {
  if (Number.isNaN(Number(cardNumber))) {
    return CARD_NUMBER_ERROR_MESSAGE.INVALID_NUMBER;
  }

  const isValidLength =
    cardNumber.length === 0 || cardNumber.length === CARD_NUMBER_LENGTH;
  if (!isValidLength) {
    return CARD_NUMBER_ERROR_MESSAGE.INVALID_CARD_LENGTH;
  }

  return "";
};
