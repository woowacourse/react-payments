import {
  EXPIRATION_PERIOD_SEGMENT,
  ExpirationPeriodSegmentType,
} from "../../constants/constants";
import { isPositiveInteger } from "./common";

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

export const isErrorExpirationPeriod = (
  value: string,
  position: ExpirationPeriodSegmentType
) => {
  if (!isPositiveInteger(value)) return "숫자만 입력 가능합니다";

  switch (position) {
    case EXPIRATION_PERIOD_SEGMENT.month:
      return validateMonth(value);
    case EXPIRATION_PERIOD_SEGMENT.year:
      return validateYear(value);
    default:
      return null;
  }
};
