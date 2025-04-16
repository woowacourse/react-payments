import ERROR from "../constants/errorMessage";
import CustomCardNumbersError from "../error/CustomCardNumbersError";
import { CardValidationInfo } from "../constants/CardValidationInfo";

const isNumber = (number: string) => {
  if (isNaN(Number(number))) return false;
  return true;
};

const numberLength = (number: string, length: number) => {
  if (number.length !== length) return false;
  return true;
};

const invalidNumber = (number: string) => {
  if (
    Number(number[0]) !== CardValidationInfo.VISA_CARD_START_NUMBER &&
    (Number(number.slice(0, 2)) <
      CardValidationInfo.MASTER_CARD_MIN_START_NUMBER ||
      Number(number.slice(0, 2)) >
        CardValidationInfo.MASTER_CARD_MAX_START_NUMBER)
  )
    return false;
  return true;
};

const invalidMonth = (month: string) => {
  if (
    Number(month) < CardValidationInfo.MIN_VALID_MONTH ||
    Number(month) > CardValidationInfo.MAX_VALID_MONTH
  )
    return false;
  return true;
};

const invalidYear = (year: string) => {
  if (Number(year) < CardValidationInfo.MIN_VALID_YEAR) return false;
  return true;
};

export const validateCardNumbers = (number: string[], length: number) => {
  number.map((num, index) => {
    if (num.length > 0) {
      if (!isNumber(num))
        throw new CustomCardNumbersError(ERROR.REQUIRE.NUMBER, index);
      if (!numberLength(num, length))
        throw new CustomCardNumbersError(
          `${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
          index
        );
    }
  });
};

export const validateFirstCardNumbers = (number: string) => {
  if (!invalidNumber(number))
    throw new CustomCardNumbersError(ERROR.CARD_NUMBER.INVALID, 0);
};

export const validateMonth = (month: string, length: number) => {
  if (!isNumber(month)) throw new Error(ERROR.REQUIRE.NUMBER);
  if (!numberLength(month, length))
    throw new Error(`${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`);
  if (!invalidMonth(month)) throw new Error(ERROR.EXPIRY.INVALID_MONTH);
};

export const validateYear = (year: string, length: number) => {
  if (!isNumber(year)) throw new Error(ERROR.REQUIRE.NUMBER);
  if (!numberLength(year, length))
    throw new Error(`${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`);
  if (!invalidYear(year)) throw new Error(ERROR.EXPIRY.INVALID_MONTH);
};

export const validateCVC = (number: string, length: number) => {
  if (!isNumber(number)) throw new Error(ERROR.REQUIRE.NUMBER);
  if (!numberLength(number, length))
    throw new Error(`${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`);
};
