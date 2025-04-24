import {
  EXPIRATION_PERIOD_SEGMENT,
  ExpirationPeriodSegmentType,
} from "../../constants/constants";
import { isNotPositiveInteger } from "./common";

const validateMonth = (value: string) => {
  const monthNumber = parseInt(value, 10);
  if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    return "유효한 날짜를 입력해 주세요";
  }

  return null;
};

const validateYear = (value: string) => {
  const yearNumber = parseInt(value, 10);
  const currentYear = new Date().getFullYear() % 100;
  if (isNaN(yearNumber) || yearNumber < currentYear) {
    return "유효한 날짜를 입력해 주세요";
  }

  return null;
};

export const validateExpirationDate = (month: string, year: string) => {
  if (!month || !year) return null;

  const monthNumber = parseInt(month, 10);
  const yearNumber = parseInt(year, 10);

  if (isNaN(monthNumber) || isNaN(yearNumber)) return null;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  if (
    yearNumber < currentYear ||
    (yearNumber === currentYear && monthNumber < currentMonth)
  ) {
    return "유효한 날짜를 입력해 주세요";
  }

  return null;
};

export const isErrorExpirationPeriod = (
  value: string,
  position: ExpirationPeriodSegmentType
) => {
  if (isNotPositiveInteger(value)) return "숫자만 입력 가능합니다";

  switch (position) {
    case EXPIRATION_PERIOD_SEGMENT.month:
      return validateMonth(value);
    case EXPIRATION_PERIOD_SEGMENT.year:
      return validateYear(value);
    default:
      return null;
  }
};
