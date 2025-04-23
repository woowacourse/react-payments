import { PASSWORD_ERROR_MESSAGE, PASSWORD_INPUT_LENGTH } from "../constants";

export const validatePassword = (passwordNumber: string) => {
  if (Number.isNaN(Number(passwordNumber))) {
    return PASSWORD_ERROR_MESSAGE.INVALID_NUMBER;
  }

  const isInvalidLength =
    passwordNumber.length === 0 ||
    passwordNumber.length === PASSWORD_INPUT_LENGTH;
  if (!isInvalidLength) {
    return PASSWORD_ERROR_MESSAGE.INVALID_PASSWORD_LENGTH;
  }

  return "";
};
