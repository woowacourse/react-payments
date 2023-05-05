import { isNumberLengthValid } from './ValidateForm';

export const validateFirstPassword = (first: string) => isNumberLengthValid(first, 1);
export const validateSecondPassword = (second: string) => isNumberLengthValid(second, 1);

export const validatePassword = (first: string, second: string) => {
  return validateFirstPassword(first) && validateSecondPassword(second);
};
