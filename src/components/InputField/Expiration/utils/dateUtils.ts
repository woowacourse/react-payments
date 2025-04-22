import { ERROR_MESSAGE } from "../../../../constants/guide";
import { EXPIRATION_DATE } from "../constants";

export function isInvalidMonth(month: string) {
  if (month === "") return false;
  const monthNum = Number(month);

  return (
    monthNum < EXPIRATION_DATE.MONTH.MIN || monthNum > EXPIRATION_DATE.MONTH.MAX
  );
}

export function isInvalidYear(year: string) {
  if (year === "") return false;

  const currentYear = new Date().getFullYear() % 100;
  const yearNum = Number(year);
  const maxYear = currentYear + EXPIRATION_DATE.YEAR.MAX_OFFSET;

  return yearNum < currentYear || yearNum > maxYear;
}

export function isExpired(month: string, year: string) {
  if (month === "" || year === "") return false;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  const monthNum = Number(month);
  const yearNum = Number(year);

  const isNextCentury = currentYear > 90 && yearNum < 10;

  if (isNextCentury) return false;

  if (yearNum < currentYear) return true;
  if (yearNum === currentYear && monthNum < currentMonth) return true;

  return false;
}

export function validateExpiration(
  cardInfo: {
    month: string;
    year: string;
  },
  maxLength: number
) {
  const { month, year } = cardInfo;

  const isExactDigitsMonth = month !== "" && month.length !== maxLength;
  const isExactDigitsYear = year !== "" && year.length !== maxLength;

  if (isExactDigitsMonth || isExactDigitsYear) {
    return ERROR_MESSAGE.LENGTH(maxLength);
  }

  if (month !== "" && isInvalidMonth(month)) {
    return ERROR_MESSAGE.INVALID_MONTH;
  }

  if (month !== "" && year !== "" && isExpired(month, year)) {
    return ERROR_MESSAGE.EXPIRED;
  }

  if (year !== "" && isInvalidYear(year)) {
    return ERROR_MESSAGE.INVALID_YEAR;
  }

  return "";
}
