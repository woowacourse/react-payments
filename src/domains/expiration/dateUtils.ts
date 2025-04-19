import { ERROR_MESSAGE } from "../../constants/guide";
import isExactLength from "../../utils/isExactLength";
import { EXPIRATION_DATE } from "../../constants/setting";

export function isValidMonth(month: string) {
  if (month === "") return true;
  const monthNum = Number(month);
  return (
    monthNum >= EXPIRATION_DATE.MONTH.MIN &&
    monthNum <= EXPIRATION_DATE.MONTH.MAX
  );
}

export function isValidYear(year: string) {
  if (year === "") return true;

  const currentYear = new Date().getFullYear() % 100;
  const yearNum = Number(year);
  const maxYear = (currentYear + EXPIRATION_DATE.YEAR.MAX_OFFSET) % 100;

  return yearNum >= currentYear
    ? yearNum <= currentYear + EXPIRATION_DATE.YEAR.MAX_OFFSET
    : yearNum <= maxYear;
}

export function isNotExpired(month: string, year: string) {
  if (month === "" || year === "") return true;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  const monthNum = Number(month);
  const yearNum = Number(year);

  const isNextCentury = currentYear > 90 && yearNum < 10;

  if (isNextCentury) return true;

  if (yearNum === currentYear) {
    return monthNum >= currentMonth;
  }

  return yearNum > currentYear;
}

export function validateExpiration(
  cardInfo: {
    month: string;
    year: string;
  },
  maxLength: number
) {
  const { month, year } = cardInfo;

  const isExactDigitsMonth = month !== "" && !isExactLength(month, maxLength);
  const isExactDigitsYear = year !== "" && !isExactLength(year, maxLength);

  if (isExactDigitsMonth || isExactDigitsYear) {
    return ERROR_MESSAGE.LENGTH(maxLength);
  }

  if (month !== "" && !isValidMonth(month)) {
    return ERROR_MESSAGE.INVALID_MONTH;
  }

  if (year !== "" && !isValidYear(year)) {
    return ERROR_MESSAGE.INVALID_YEAR;
  }

  if (month !== "" && year !== "" && !isNotExpired(month, year)) {
    return ERROR_MESSAGE.EXPIRED;
  }

  return "";
}
