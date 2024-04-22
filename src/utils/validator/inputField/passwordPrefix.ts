import { isEmpty, isNumeric } from '../common';

export const isValidPasswordPrefixInput = (value: string) => {
  if (isEmpty(value) || isNumeric(value)) return true;

  return false;
};
