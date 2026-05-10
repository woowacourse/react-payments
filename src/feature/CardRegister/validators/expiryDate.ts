import {
  EXPIRY_VALUE_LENGTH,
  MAX_EXPIRY_MONTH,
  MIN_EXPIRY_MONTH,
} from "../constants";

export const isTwoDigitsExceeded = (value: string) =>
  value.length > EXPIRY_VALUE_LENGTH;

export const isMonthValid = (value: string) => {
  const month = Number(value);
  return month >= MIN_EXPIRY_MONTH && month <= MAX_EXPIRY_MONTH;
};

export const isTwoDigits = (value: string) => {
  return value.length === EXPIRY_VALUE_LENGTH;
};
