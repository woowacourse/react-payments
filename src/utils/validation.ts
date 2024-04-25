import { CARD_BRAND_INFO, VALID_LENGTH } from "@/constants/condition";

export enum ValidationStatus {
  INVALID_LENGTH = "INVALID_LENGTH",
  EXPIRED_CARD_DATE = "EXPIRED_CARD_DATE",
  INVALID_MONTH = "INVALID_MONTH",
  NAME_SHOULD_BE_CAPITAL = "NAME_SHOULD_BE_CAPITAL",
  DOUBLE_SPACE = "DOUBLE_SPACE",
  ENTER_REQUIRED = "ENTER_REQUIRED",
}

export const validateIsValidLength = (
  newValue: string,
  validLength: number
) => {
  if (newValue.length !== validLength && newValue.length) {
    return { type: ValidationStatus.INVALID_LENGTH, isValid: false };
  }
  return { type: ValidationStatus.INVALID_LENGTH, isValid: true };
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
      return { type: ValidationStatus.EXPIRED_CARD_DATE, isValid: false };
    }
  }
  return { type: ValidationStatus.EXPIRED_CARD_DATE, isValid: true };
};

export const validateMonth = (month: number) => {
  if (month < 1 || month > 12) {
    return { type: ValidationStatus.INVALID_MONTH, isValid: false };
  }
  return { type: ValidationStatus.INVALID_MONTH, isValid: true };
};

export const validateOwnerName = (name: string) => {
  const alphabetRegex = /^[a-zA-Z\s]*$/;
  if (!alphabetRegex.test(name)) {
    return { type: ValidationStatus.NAME_SHOULD_BE_CAPITAL, isValid: false };
  }
  return { type: ValidationStatus.NAME_SHOULD_BE_CAPITAL, isValid: true };
};

export const validateDoubleSpace = (name: string) => {
  const doubleSpaceRegex = /\s{2,}/;
  if (doubleSpaceRegex.test(name)) {
    return { type: ValidationStatus.DOUBLE_SPACE, isValid: false };
  }
  return { type: ValidationStatus.DOUBLE_SPACE, isValid: true };
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
  return { type: ValidationStatus.ENTER_REQUIRED, isValid: false };
};
