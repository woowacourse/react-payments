import type { FieldErrorInformation } from "../shared/types";
import { ERROR_MESSAGES, PASSWORD_LENGTH } from "../PasswordField/constants";

export const validatePassword = (password: string) => {
  const errorInformation: FieldErrorInformation = {
    isValid: true,
    errorMessage: null,
  };

  if (!isPasswordLengthValid(password)) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = ERROR_MESSAGES.INVALID_LENGTH;
  }

  return {
    isValid: errorInformation.isValid,
    errorMessage: errorInformation.errorMessage,
  };
};

const isPasswordLengthValid = (password: string) => {
  return password.length === PASSWORD_LENGTH;
};
