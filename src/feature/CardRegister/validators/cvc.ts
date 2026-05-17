import { CVC_MIN_LENGTH, ERROR_MESSAGES } from "../constants";
import type { ErrorInformationType } from "./ErrorInformationType";

export const validateCvc = (cvcNumber: string) => {
  const errorInformation: ErrorInformationType = {
    isValid: true,
    errorMessage: null,
  };

  if (!isCvcLengthValid(cvcNumber)) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = ERROR_MESSAGES.CVC.INVALID_LENGTH;
  }

  return {
    isValid: errorInformation.isValid,
    errorMessage: errorInformation.errorMessage,
  };
};

const isCvcLengthValid = (cvcNumber: string) => {
  return cvcNumber.length >= CVC_MIN_LENGTH;
};
