import ERROR from "../constants/errorMessage";
import CustomCardNumbersError from "../error/CustomCardNumbersError";
import { CARD_VALIDATION_INFO } from "../constants/CardValidationInfo";

const isNumber = (number: string) => {
  if (isNaN(Number(number))) return false;
  return true;
};

const isCorrectLength = (number: string, length: number) => {
  if (number.length !== length) return false;
  return true;
};

const isValidCardStartNumber = (number: string) => {
  if (number.length > 0) {
    if (
      Number(number[0]) !== CARD_VALIDATION_INFO.VISA_CARD_START_NUMBER &&
      (Number(number.slice(0, 2)) <
        CARD_VALIDATION_INFO.MASTER_CARD_MIN_START_NUMBER ||
        Number(number.slice(0, 2)) >
          CARD_VALIDATION_INFO.MASTER_CARD_MAX_START_NUMBER)
    )
      return false;
  }
  return true;
};

const isValidMonth = (month: string) => {
  if (
    Number(month) < CARD_VALIDATION_INFO.MIN_VALID_MONTH ||
    Number(month) > CARD_VALIDATION_INFO.MAX_VALID_MONTH
  )
    return false;
  return true;
};

const isValidYear = (year: string) => {
  if (Number(year) < CARD_VALIDATION_INFO.MIN_VALID_YEAR) return false;
  return true;
};

export const validateCardNumbers = (number: string[], length: number) => {
  number.map((num, index) => {
    if (num.length > 0) {
      if (!isNumber(num))
        throw new CustomCardNumbersError(ERROR.REQUIRE.NUMBER, index);
      if (!isCorrectLength(num, length))
        throw new CustomCardNumbersError(
          `${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
          index
        );
    }
  });
};

export const validateFirstCardNumbers = (number: string) => {
  if (!isValidCardStartNumber(number))
    throw new CustomCardNumbersError(ERROR.CARD_NUMBER.INVALID, 0);
};

export const validateMonth = (month: string, length: number) => {
  if (!isNumber(month)) throw new Error(ERROR.REQUIRE.NUMBER);
  if (!isCorrectLength(month, length))
    throw new Error(`${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`);
  if (!isValidMonth(month)) throw new Error(ERROR.EXPIRY.INVALID_MONTH);
};

export const validateYear = (year: string, length: number) => {
  if (!isNumber(year)) throw new Error(ERROR.REQUIRE.NUMBER);
  if (!isCorrectLength(year, length))
    throw new Error(`${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`);
  if (Number(year) < CARD_VALIDATION_INFO.CURRENT_YEAR)
    throw new Error(ERROR.EXPIRY.BELOW_CURRENT_YEAR);
  if (!isValidYear(year)) throw new Error(ERROR.EXPIRY.INVALID_YEAR);
};

export const validateCVC = (number: string, length: number) => {
  if (!isNumber(number)) throw new Error(ERROR.REQUIRE.NUMBER);
  if (!isCorrectLength(number, length))
    throw new Error(`${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`);
};

export const validatePassword = (number: string, length: number) => {
  if (!isNumber(number)) throw new Error(ERROR.REQUIRE.NUMBER);
  if (!isCorrectLength(number, length))
    throw new Error(`${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`);
};
