import { NOT_ALPHABET_REGEX } from '../constants';

export const validateOwnerName = (input: string) => {
  return NOT_ALPHABET_REGEX.test(input);
};
