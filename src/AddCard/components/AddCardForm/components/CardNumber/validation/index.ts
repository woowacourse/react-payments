import { EXPIRE_DATE_ERROR_MESSAGE } from "../constants";
import { CARD_NUMBER_LENGTH } from "../constants";

export const validateCardNumber = (cardNumber: string) => {
  if (isNaN(Number(cardNumber))) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_NUMBER;
  }

  const isInvalidLength =
    cardNumber.length === 0 || cardNumber.length === CARD_NUMBER_LENGTH;
  if (!isInvalidLength) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_CARD_LENGTH;
  }

  return "";
};
