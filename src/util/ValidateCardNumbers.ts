import { MAX_NUMBER_LENGTH } from '../constants';
import { isNumberLengthValid } from './ValidateForm';

export const validateCardNumbers = (numbers: string[]) => {
  return numbers.every((number) => isNumberLengthValid(number, MAX_NUMBER_LENGTH));
};
