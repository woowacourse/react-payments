import {
  MAX_EXPIRATION_MONTH,
  MAX_EXPIRATION_YEAR,
  MIN_EXPIRATION_MONTH,
  MIN_EXPIRATION_YEAR,
} from '../constants/cardConstants';

export const isNumber = (input: string) => {
  return Number.isNaN(Number(input));
};

export const isValidYearRange = (expirationDate: string) => {
  return Number(expirationDate) < MIN_EXPIRATION_YEAR || Number(expirationDate) > MAX_EXPIRATION_YEAR;
};

export const isValidMonthRange = (expirationDate: string) => {
  return Number(expirationDate) < MIN_EXPIRATION_MONTH || Number(expirationDate) > MAX_EXPIRATION_MONTH;
};
