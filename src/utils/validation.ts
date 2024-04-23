import { VALID_LENGTH } from "@/constants/condition";
import { ERROR_MESSAGE, INVALID_LENGTH } from "@/constants/errorMessage";
import { ExpirationPeriodInputType } from "@/pages/CardRegisterPage/CardRegisterPage";

export const validateIsValidLength = (
  newValue: string,
  validLength: number
) => {
  if (newValue.length !== validLength) {
    return INVALID_LENGTH(validLength);
  }
  return null;
};

export const validateExpirationDate = (date: ExpirationPeriodInputType) => {
  const { expirationMonth, expirationYear } = date;
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
      return ERROR_MESSAGE.EXPIRED_CARD_DATE;
    }
  }
  return null;
};

export const validateMonth = (month: number) => {
  if (month < 1 || month > 12) {
    return ERROR_MESSAGE.INVALID_MONTH;
  }
  return null;
};

export const validateOwnerName = (name: string) => {
  const alphabetRegex = /^[a-zA-Z\s]*$/;
  if (!alphabetRegex.test(name)) {
    return ERROR_MESSAGE.NAME_SHOULD_CAPITAL;
  }

  const doubleSpaceRegex = /\s{2,}/;
  if (doubleSpaceRegex.test(name)) {
    return ERROR_MESSAGE.DOUBLE_SPACE;
  }
  return null;
};

export const makeNewErrorMessages = (
  messages: (string | null)[],
  newMessage: string | null,
  index: number
) => {
  return messages.map((message, i) => (i === index ? newMessage : message));
};
