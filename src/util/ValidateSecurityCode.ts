import { isNumberLengthValid } from './ValidateForm';

export const validateSecurityCode = (input: string) => {
  return isNumberLengthValid(input, 3);
};
