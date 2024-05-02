import { REGEX } from "@/constants/regex";

export enum ErrorStatus {
  INVALID_LENGTH = "invalidLength",
  EXPIRED_CARD_DATE = "expiredCardDate",
  INVALID_MONTH = "invalidMonth",
  NAME_SHOULD_BE_CAPITAL = "nameCapital",
  DOUBLE_SPACE = "doubleSpace",
  ENTER_REQUIRED = "enter",
  IS_NOT_NUMBER = "is_not_number",
}

export type ErrorStatusType = typeof ErrorStatus;

export const validateIsValidLength = (
  newValue: string,
  validLength: number
) => {
  if (newValue.length !== validLength && newValue.length) {
    return { type: ErrorStatus.INVALID_LENGTH, isValid: false };
  }
  return { isValid: true };
};

export const validateIsMinNumber = (newValue: string, minLength: number) => {
  if (newValue.length < minLength) {
    return { type: ErrorStatus.INVALID_LENGTH, isValid: false };
  }
  return { isValid: true };
};

export const validateMonth = (month: number) => {
  if (month < 1 || month > 12) {
    return { type: ErrorStatus.INVALID_MONTH, isValid: false };
  }
  return { isValid: true };
};

export const validateDoubleSpace = (name: string) => {
  const doubleSpaceRegex = /\s{2,}/;
  if (doubleSpaceRegex.test(name)) {
    return { type: ErrorStatus.DOUBLE_SPACE, isValid: false };
  }
  return { isValid: true };
};

export const validateEnterRequired = () => {
  return { type: ErrorStatus.ENTER_REQUIRED, isValid: false };
};

export const validateIsNumber = (value: string) => {
  const numbersRegex = REGEX.NUMBERS;
  if (!numbersRegex.test(value)) {
    return { type: ErrorStatus.IS_NOT_NUMBER, isValid: false };
  }
  return { isValid: true };
};

export const validateIsCapital = (name: string) => {
  const alphabetRegex = REGEX.CAPITAL_LETTERS;
  if (!alphabetRegex.test(name)) {
    return { type: ErrorStatus.NAME_SHOULD_BE_CAPITAL, isValid: false };
  }
  return { isValid: true };
};
