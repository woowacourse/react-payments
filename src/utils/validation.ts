import { CARD_BRAND_INFO, VALID_LENGTH } from "@/constants/condition";
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

export const validateIsValidLength = (
  newValue: string,
  validLength: number
) => {
  if (newValue.length !== validLength && newValue.length) {
    return { type: ErrorStatus.INVALID_LENGTH, isValid: false };
  }
  return { isValid: true };
};

export const validateExpirationDate = (date: string[]) => {
  const [expirationMonth, expirationYear] = date;

  const month = Number(expirationMonth);
  const year = Number(expirationYear);

  if (
    expirationMonth.length === VALID_LENGTH.EXPIRATION_PERIOD &&
    expirationYear.length === VALID_LENGTH.EXPIRATION_PERIOD
  ) {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear() - 2000;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return { type: ErrorStatus.EXPIRED_CARD_DATE, isValid: false };
    }
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

export const validateIsEnglish = (name: string) => {
  const alphabetRegex = REGEX.CAPITAL_LETTERS;
  if (!alphabetRegex.test(name)) {
    return { type: ErrorStatus.NAME_SHOULD_BE_CAPITAL, isValid: false };
  }
  return { isValid: true };
};

export const checkCardBrand = (cardNumbers: string) => {
  if (Number(cardNumbers[0]) === CARD_BRAND_INFO.VISA.START_NUMBER) {
    return "VISA";
  }
  if (
    Number(cardNumbers.slice(0, 2)) <= CARD_BRAND_INFO.MASTER.END_NUMBER &&
    Number(cardNumbers.slice(0, 2)) >= CARD_BRAND_INFO.MASTER.START_NUMBER
  ) {
    return "MASTER";
  }
  return "NONE";
};
