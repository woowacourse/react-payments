import ERROR from '../constants/errorMessage';
import CustomCardNumbersError from '../error/CustomCardNumbersError';
import { CARD_VALIDATION_INFO } from '../constants/cardValidationInfo.ts';

const isNumber = (number: string) => {
  return !isNaN(Number(number));
};

const invalidNumberLength = (number: string, length: number) => {
  return number.length !== length;
};

const invalidCardNumber = (number: string) => {
  return (
    Number(number[0]) !== CARD_VALIDATION_INFO.VISA_CARD_START_NUMBER &&
    (Number(number.slice(0, 2)) <
      CARD_VALIDATION_INFO.MASTER_CARD_MIN_START_NUMBER ||
      Number(number.slice(0, 2)) >
        CARD_VALIDATION_INFO.MASTER_CARD_MAX_START_NUMBER)
  );
};

const invalidMonth = (month: string) => {
  return (
    Number(month) < CARD_VALIDATION_INFO.MIN_VALID_MONTH ||
    Number(month) > CARD_VALIDATION_INFO.MAX_VALID_MONTH
  );
};

const invalidYear = (year: string) => {
  return Number(year) < CARD_VALIDATION_INFO.MIN_VALID_YEAR;
};

export const validateCardNumbers = (number: string[], length: number) => {
  number.map((num, index) => {
    if (num.length > 0) {
      if (!isNumber(num))
        throw new CustomCardNumbersError(ERROR.REQUIRE.NUMBER, index);
      if (invalidNumberLength(num, length))
        throw new CustomCardNumbersError(
          `${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
          index
        );
    }
  });
};

export const validateFirstCardNumbers = (number: string) => {
  if (invalidCardNumber(number))
    throw new CustomCardNumbersError(ERROR.CARD_NUMBER.INVALID, 0);
};

export const validateMonth = (month: string, length: number) => {
  if (!isNumber(month)) throw new Error(ERROR.REQUIRE.NUMBER);
  if (invalidNumberLength(month, length))
    throw new Error(`${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`);
  if (invalidMonth(month)) throw new Error(ERROR.EXPIRY.INVALID_MONTH);
};

export const validateYear = (year: string, length: number) => {
  if (!isNumber(year)) throw new Error(ERROR.REQUIRE.NUMBER);
  if (invalidNumberLength(year, length))
    throw new Error(`${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`);
  if (invalidYear(year)) throw new Error(ERROR.EXPIRY.INVALID_YEAR);
};

export const validateCVC = (number: string, length: number) => {
  if (!isNumber(number)) throw new Error(ERROR.REQUIRE.NUMBER);
  if (invalidNumberLength(number, length))
    throw new Error(`${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`);
};
