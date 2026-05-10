import {
  EXPIRY_MONTH_LENGTH,
  EXPIRY_YEAR_LENGTH,
  MAX_EXPIRY_MONTH,
  MIN_EXPIRY_MONTH,
} from "../constants";

export const isMonthRangeValid = (value: string) => {
  const month = Number(value);
  return month >= MIN_EXPIRY_MONTH && month <= MAX_EXPIRY_MONTH;
};

export const isMonthLengthValid = (value: string) => {
  return value.length === EXPIRY_MONTH_LENGTH;
};

export const isYearLengthValid = (value: string) => {
  return value.length === EXPIRY_YEAR_LENGTH;
};
