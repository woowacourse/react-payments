import ERROR from "../constants/errorMessage";
import { CARD_VALIDATION_INFO } from "../constants/cardValidationInfo";

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

export const validateCardNumbers = (
  cardNumbers: string[],
  length: number,
): { isValid: boolean; errorIndex: number | null; helperText: string } => {
  for (let i = 0; i < cardNumbers.length; i++) {
    const num = cardNumbers[i];

    if (i === 0) {
      const isValidFirstCardNumbers = validateFirstCardNumbers(num);
      if (!isValidFirstCardNumbers.isValid) return isValidFirstCardNumbers;
    }

    if (num.length > 0) {
      if (!isNumber(num)) {
        return {
          isValid: false,
          errorIndex: i,
          helperText: ERROR.REQUIRE.NUMBER,
        };
      }
      if (!isCorrectLength(num, length)) {
        return {
          isValid: false,
          errorIndex: i,
          helperText: `${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
        };
      }
    }
  }

  return {
    isValid: true,
    errorIndex: null,
    helperText: "",
  };
};

export const validateFirstCardNumbers = (
  number: string,
): { isValid: boolean; errorIndex: number | null; helperText: string } => {
  if (!isValidCardStartNumber(number))
    return {
      isValid: false,
      errorIndex: 0,
      helperText: ERROR.CARD_NUMBER.INVALID,
    };
  return {
    isValid: true,
    errorIndex: null,
    helperText: "",
  };
};

export const validateMonth = (
  month: string,
  length: number,
): { isMonthValid: boolean; monthHelperText: string } => {
  if (!isNumber(month))
    return { isMonthValid: false, monthHelperText: ERROR.REQUIRE.NUMBER };
  if (!isCorrectLength(month, length))
    return {
      isMonthValid: false,
      monthHelperText: `${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
    };
  if (!isValidMonth(month))
    return { isMonthValid: false, monthHelperText: ERROR.EXPIRY.INVALID_MONTH };
  return { isMonthValid: true, monthHelperText: "" };
};

export const validateYear = (
  year: string,
  length: number,
): { isYearValid: boolean; yearHelperText: string } => {
  if (!isNumber(year))
    return { isYearValid: false, yearHelperText: ERROR.REQUIRE.NUMBER };
  if (!isCorrectLength(year, length))
    return {
      isYearValid: false,
      yearHelperText: `${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
    };
  if (Number(year) < CARD_VALIDATION_INFO.CURRENT_YEAR)
    return {
      isYearValid: false,
      yearHelperText: ERROR.EXPIRY.BELOW_CURRENT_YEAR,
    };
  if (!isValidYear(year))
    return { isYearValid: false, yearHelperText: ERROR.EXPIRY.INVALID_YEAR };
  return { isYearValid: true, yearHelperText: "" };
};

export const validateCVC = (
  number: string,
  length: number,
): { isValid: boolean; helperText: string } => {
  if (!isNumber(number))
    return { isValid: false, helperText: ERROR.REQUIRE.NUMBER };
  if (!isCorrectLength(number, length))
    return {
      isValid: false,
      helperText: `${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
    };
  return { isValid: true, helperText: "" };
};

export const validatePassword = (
  number: string,
  length: number,
): { isValid: boolean; helperText: string } => {
  if (!isNumber(number))
    return { isValid: false, helperText: ERROR.REQUIRE.NUMBER };
  if (!isCorrectLength(number, length))
    return {
      isValid: false,
      helperText: `${length}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
    };
  return { isValid: true, helperText: "" };
};

export const isCardNumbersValid = (
  cardNumbers: string[],
  cardNumbersHelperText: string,
): boolean => {
  const isAllFilled = cardNumbers.every(
    (num) => num.length === CARD_VALIDATION_INFO.CARD_MAX_LENGTH,
  );
  return isAllFilled && cardNumbersHelperText === "";
};

export const isCardCompanySelected = (option: string) => {
  if (option !== "") return true;
};
