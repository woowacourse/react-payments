import { MAX_DATE_LENGTH, MAX_MONTH, MAX_YEAR, MIN_MONTH, MIN_YEAR } from '../constants';
import { isNumberLengthValid } from './ValidateForm';

export const validateExpirationMonth = (input: string) => {
  return (
    isNumberLengthValid(input, MAX_DATE_LENGTH) &&
    Number(input) >= MIN_MONTH &&
    Number(input) <= MAX_MONTH
  );
};

export const validateExpirationYear = (input: string) => {
  return (
    isNumberLengthValid(input, MAX_DATE_LENGTH) &&
    Number(input) >= MIN_YEAR &&
    Number(input) <= MAX_YEAR
  );
};

export const validateExpirationDate = (expirationDate: { month: string; year: string }) => {
  const isExpirationMonthValid = validateExpirationMonth(expirationDate.month);
  const isExpirationYearValid = validateExpirationYear(expirationDate.year);

  return {
    isExpirationMonthValid: isExpirationMonthValid,
    isExpirationYearValid: isExpirationYearValid,
    isExpirationDateValid: isExpirationMonthValid && isExpirationYearValid,
  };
};
