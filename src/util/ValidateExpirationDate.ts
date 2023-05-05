import { isNumberLengthValid } from './ValidateForm';

export const validateExpirationMonth = (input: string) => {
  return Number(input) > 0 && isNumberLengthValid(input, 2) && Number(input) <= 12;
};

export const validateExpirationYear = (input: string) => {
  const minYear = new Date().getFullYear() - 2000;
  const maxYear = new Date().getFullYear() - 1995;
  return isNumberLengthValid(input, 2) && Number(input) >= minYear && Number(input) <= maxYear;
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
