import { MAX_PASSWORD_LENGTH } from '../constants';
import { isNumberLengthValid } from './ValidateForm';

export const validateFirstPassword = (first: string) =>
  isNumberLengthValid(first, MAX_PASSWORD_LENGTH);

export const validateSecondPassword = (second: string) =>
  isNumberLengthValid(second, MAX_PASSWORD_LENGTH);

export const validatePassword = (first: string, second: string) => {
  return validateFirstPassword(first) && validateSecondPassword(second);
};
