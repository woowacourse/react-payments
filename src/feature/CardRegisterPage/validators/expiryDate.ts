import {
  ERROR_MESSAGES,
  EXPIRY_MONTH_LENGTH,
  EXPIRY_YEAR_LENGTH,
  MAX_EXPIRY_MONTH,
  MIN_EXPIRY_MONTH,
} from "../constants";
import type { ErrorInformationType } from "./ErrorInformationType";

export const validateExpiryMonth = (expriyMonth: string) => {
  const errorInformation: ErrorInformationType = {
    isValid: true,
    errorMessage: null,
  };

  if (!isMonthLengthValid(expriyMonth)) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = ERROR_MESSAGES.EXPIRY_MONTH.INVALID_LENGTH;
  }

  if (!isMonthRangeValid(expriyMonth)) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = ERROR_MESSAGES.EXPIRY_MONTH.INVALID_RANGE;
  }

  return {
    isValid: errorInformation.isValid,
    errorMessage: errorInformation.errorMessage,
  };
};

const isMonthRangeValid = (value: string) => {
  const month = Number(value);
  return month >= MIN_EXPIRY_MONTH && month <= MAX_EXPIRY_MONTH;
};

const isMonthLengthValid = (value: string) => {
  return value.length === EXPIRY_MONTH_LENGTH;
};

export const validateExpiryYear = (expriyYear: string) => {
  const errorInformation: ErrorInformationType = {
    isValid: true,
    errorMessage: null,
  };

  if (!isYearLengthValid(expriyYear)) {
    errorInformation.isValid = false;
    errorInformation.errorMessage = ERROR_MESSAGES.EXPIRY_YEAR.INVALID_LENGTH;
  }

  return {
    isValid: errorInformation.isValid,
    errorMessage: errorInformation.errorMessage,
  };
};

const isYearLengthValid = (expriyYear: string) => {
  return expriyYear.length === EXPIRY_YEAR_LENGTH;
};
