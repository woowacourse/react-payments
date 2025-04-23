import { ERROR_MESSAGE, MAX_MONTH, MIN_MONTH, MIN_YEAR, NUMBER_ONLY_REGEX } from "../constants/constant";
import { ExpirationValidationType } from "../types";

export const validateNumberOnly = (value: string) => {
  if (!NUMBER_ONLY_REGEX.test(value)) {
    return { error: true, message: ERROR_MESSAGE.IS_NOT_NUMBER };
  }
  return { error: false, message: "" };
};

export const validateExpirationDate = (type: ExpirationValidationType, value: string) => {
  const numberCheck = validateNumberOnly(value);
  if (numberCheck.error) return numberCheck;

  const num = parseInt(value);

  if (type === "MM" && (num < MIN_MONTH || num > MAX_MONTH)) {
    return { error: true, message: ERROR_MESSAGE.MM_VALID };
  }

  if (type === "YY" && num < MIN_YEAR) {
    return { error: true, message: ERROR_MESSAGE.YY_VALID };
  }

  return { error: false, message: "" };
};
