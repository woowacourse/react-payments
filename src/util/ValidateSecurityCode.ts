import { MAX_SECURITY_CODE_LENGTH } from '../constants';
import { isNumberLengthValid } from './ValidateForm';

export const validateSecurityCode = (input: string) => {
  return isNumberLengthValid(input, MAX_SECURITY_CODE_LENGTH);
};
