import { isAlphabetic, isEmpty } from '../common';

export const isValidOwnerNameInput = (value: string) => {
  if (isEmpty(value) || isAlphabetic(value)) return true;
};
