import { CARD_BRAND_INFO, VALID_LENGTH } from "@/constants/condition";
import { REGEX } from "@/constants/regex";

export enum ErrorStatus {
  INVALID_LENGTH = "길이가 유효하지 않습니다.",
  EXPIRED_CARD_DATE = "이미 만료된 카드입니다.",
  INVALID_MONTH = "유효한 달이 아닙니다.",
  NAME_SHOULD_BE_CAPITAL = "이름은 영어 대문자로만 입력할 수 있습니다.",
  DOUBLE_SPACE = "스페이스를 두번 이상 입력할 수 없습니다.",
  ENTER_REQUIRED = "엔터를 쳐야 합니다.",
  CVC_NUMBER = "cvc는 이름으로 입력해야 합니다.",
  IS_NOT_NUMBER = "숫자로 입력해야 합니다.",
}

export const validateIsValidLength = (
  newValue: string,
  validLength: number
) => {
  if (newValue.length !== validLength && newValue.length) {
    return { type: ErrorStatus.INVALID_LENGTH, isValid: false };
  }
  return { type: ErrorStatus.INVALID_LENGTH, isValid: true };
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
  return { type: ErrorStatus.EXPIRED_CARD_DATE, isValid: true };
};

export const validateMonth = (month: number) => {
  if (month < 1 || month > 12) {
    return { type: ErrorStatus.INVALID_MONTH, isValid: false };
  }
  return { type: ErrorStatus.INVALID_MONTH, isValid: true };
};

export const validateDoubleSpace = (name: string) => {
  const doubleSpaceRegex = /\s{2,}/;
  if (doubleSpaceRegex.test(name)) {
    return { type: ErrorStatus.DOUBLE_SPACE, isValid: false };
  }
  return { type: ErrorStatus.DOUBLE_SPACE, isValid: true };
};

export const makeNewErrorMessages = (
  messages: (string | null)[],
  newMessage: string | null,
  index: number
) => {
  return messages.map((message, i) => (i === index ? newMessage : message));
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

export const validateEnterRequired = () => {
  return { type: ErrorStatus.ENTER_REQUIRED, isValid: false };
};

export const validateIsNumber = (value: string) => {
  const numbersRegex = REGEX.NUMBERS;
  if (!numbersRegex.test(value)) {
    return { type: ErrorStatus.IS_NOT_NUMBER, isValid: false };
  }
  return { type: ErrorStatus.IS_NOT_NUMBER, isValid: true };
};

export const validateIsEnglish = (name: string) => {
  const alphabetRegex = REGEX.CAPITAL_LETTERS;
  if (!alphabetRegex.test(name)) {
    return { type: ErrorStatus.NAME_SHOULD_BE_CAPITAL, isValid: false };
  }
  return { type: ErrorStatus.NAME_SHOULD_BE_CAPITAL, isValid: true };
};
