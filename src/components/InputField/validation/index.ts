import { ERROR_MESSAGE } from "../../../constants/guide";
import { EXPIRATION_DATE } from "../Expiration/constants";

export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

export function validateMonth(
  month: string,
  maxLength: number
): ValidationResult {
  if (month === "") return { isValid: true, errorMessage: "" };

  if (month.length !== maxLength) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.LENGTH(maxLength) };
  }

  const monthNum = Number(month);
  if (
    monthNum < EXPIRATION_DATE.MONTH.MIN ||
    monthNum > EXPIRATION_DATE.MONTH.MAX
  ) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_MONTH };
  }

  return { isValid: true, errorMessage: "" };
}

export function validateYear(
  year: string,
  maxLength: number
): ValidationResult {
  if (year === "") return { isValid: true, errorMessage: "" };

  if (year.length !== maxLength) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.LENGTH(maxLength) };
  }

  const currentYear = new Date().getFullYear() % 100;
  const yearNum = Number(year);
  const maxYear = currentYear + EXPIRATION_DATE.YEAR.MAX_OFFSET;

  if (yearNum < currentYear || yearNum > maxYear) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_YEAR };
  }

  return { isValid: true, errorMessage: "" };
}

export function validateExpiration(
  month: string,
  year: string,
  maxLength: number
): ValidationResult {
  const monthResult = validateMonth(month, maxLength);
  if (!monthResult.isValid) return monthResult;

  const yearResult = validateYear(year, maxLength);
  if (!yearResult.isValid) return yearResult;

  if (month !== "" && year !== "") {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    const monthNum = Number(month);
    const yearNum = Number(year);

    const isNextCentury = currentYear > 90 && yearNum < 10;

    if (!isNextCentury) {
      if (
        yearNum < currentYear ||
        (yearNum === currentYear && monthNum < currentMonth)
      ) {
        return { isValid: false, errorMessage: ERROR_MESSAGE.EXPIRED };
      }
    }
  }

  return { isValid: true, errorMessage: "" };
}

export function validateSegmentLength(
  segment: string,
  maxLength: number
): ValidationResult {
  if (segment === "") return { isValid: true, errorMessage: "" };

  if (segment.length !== maxLength) {
    return {
      isValid: false,
      errorMessage: ERROR_MESSAGE.LENGTH(maxLength),
    };
  }

  return { isValid: true, errorMessage: "" };
}
