import { isNumberLengthValid } from './ValidateForm';

export const validateCardNumbers = (numbers: string[]) => {
  return numbers.every((number) => isNumberLengthValid(number, 4));
};
