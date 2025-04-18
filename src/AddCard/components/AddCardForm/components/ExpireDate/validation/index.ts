import { EXPIRE_DATE_ERROR_MESSAGE } from "../constants";
import { EXPIRE_DATE_LENGTH } from "../constants";

const isValidMonth = (month: number) => {
  return month >= 1 && month <= 12;
};

export const validateMonth = (month: string) => {
  if (isNaN(Number(month))) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_NUMBER;
  }

  if (!isValidMonth(Number(month))) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_MONTH_RANGE;
  }

  const isInvalidLength =
    month.length === 0 || month.length === EXPIRE_DATE_LENGTH;
  if (!isInvalidLength) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_MONTH_LENGTH;
  }

  return "";
};

const isValidYear = (year: string) => {
  return year.length === EXPIRE_DATE_LENGTH;
};

export const validateYear = (year: string) => {
  if (isNaN(Number(year))) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_NUMBER;
  }

  if (!isValidYear(year)) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_YEAR_LENGTH;
  }

  return "";
};
