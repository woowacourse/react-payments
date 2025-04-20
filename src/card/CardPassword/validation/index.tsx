import { CARD_PASSWORD_ERROR_MESSAGE } from "../constants";

export const validateCardPassword = (value: string) => {
  if (value === "") {
    return "";
  }

  if (isNaN(Number(value))) {
    return CARD_PASSWORD_ERROR_MESSAGE.NUMBER;
  }

  if (value.length < 2) {
    return CARD_PASSWORD_ERROR_MESSAGE.LENGTH;
  }

  return "";
};
