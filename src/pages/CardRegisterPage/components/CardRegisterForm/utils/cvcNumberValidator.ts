import type { FieldErrorInformation } from "../shared/types";
import { CVC_MIN_LENGTH, ERROR_MESSAGES } from "../CvcNumberField/constants";

export const validateCvc = (cvcNumber: string) => {
  const errorInformation: FieldErrorInformation = {
    isValid: true,
    errorMessage: null,
  };

  if (!isCvcLengthValid(cvcNumber)) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = ERROR_MESSAGES.INVALID_LENGTH;
  }

  return {
    isValid: errorInformation.isValid,
    errorMessage: errorInformation.errorMessage,
  };
};

const isCvcLengthValid = (cvcNumber: string) => {
  return cvcNumber.length >= CVC_MIN_LENGTH;
};
