import { ERROR_MESSAGES, PASSWORD_LENGTH } from "../constants";
import type { ErrorInformationType } from "./ErrorInformationType";

export const validatePassword = (password: string) => {
  const errorInformation: ErrorInformationType = {
    isValid: true,
    errorMessage: null,
  };

  if (!isPasswordLengthValid(password)) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = ERROR_MESSAGES.PASSWORD.INVALID_LENGTH;
  }

  return {
    isValid: errorInformation.isValid,
    errorMessage: errorInformation.errorMessage,
  };
};

const isPasswordLengthValid = (password: string) => {
  return password.length === PASSWORD_LENGTH;
};
