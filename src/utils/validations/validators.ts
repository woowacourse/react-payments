import { EXPIRATION_PERIOD_SEGMENT, MAX_LENGTH } from "../../constants/card";
import { ERROR_MESSAGES } from "../../constants/validation";
import { ExpirationPeriodSegmentType } from "../../types/card";
import { hasExactLength, isEmpty, isPositiveInteger } from "./common";

export const isErrorCardNumber = (value: string): string | null => {
  if (!isPositiveInteger(value)) return ERROR_MESSAGES.NUMBER;
  if (!hasExactLength(value, MAX_LENGTH.cardNumber)) {
    return ERROR_MESSAGES.FILL_CARD_NUMBER;
  }
  return null;
};

export const isErrorCardCompany = (value: string): string | null => {
  if (isEmpty(value)) return ERROR_MESSAGES.CHOOSE_CARD_COMPANY;
  return null;
};

const validateMonth = (value: string): string | null => {
  const monthNumber = parseInt(value, 10);
  if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    return ERROR_MESSAGES.INVALID_DATE;
  }
  return null;
};

const validateYear = (value: string): string | null => {
  const yearNumber = parseInt(value, 10);
  const currentYear = new Date().getFullYear() % 100;
  if (isNaN(yearNumber) || yearNumber < currentYear) {
    return ERROR_MESSAGES.INVALID_DATE;
  }
  return null;
};

export const isErrorExpirationPeriod = (
  value: string,
  position: ExpirationPeriodSegmentType
): string | null => {
  if (!isPositiveInteger(value)) return ERROR_MESSAGES.NUMBER;
  if (!hasExactLength(value, MAX_LENGTH.expirationPeriod)) {
    return ERROR_MESSAGES.FILL_DATE;
  }

  switch (position) {
    case EXPIRATION_PERIOD_SEGMENT.month:
      return validateMonth(value);
    case EXPIRATION_PERIOD_SEGMENT.year:
      return validateYear(value);
    default:
      return null;
  }
};

export const isErrorCvcNumber = (value: string): string | null => {
  if (!isPositiveInteger(value)) return ERROR_MESSAGES.NUMBER;
  if (!hasExactLength(value, MAX_LENGTH.cvcNumber)) {
    return ERROR_MESSAGES.FILL_CVC;
  }
  return null;
};

export const isErrorPassword = (value: string): string | null => {
  if (!isPositiveInteger(value)) return ERROR_MESSAGES.NUMBER;
  if (!hasExactLength(value, MAX_LENGTH.password)) {
    return ERROR_MESSAGES.FILL_PASSWORD;
  }
  return null;
};
