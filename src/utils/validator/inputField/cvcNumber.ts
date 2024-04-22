import { isEmpty, isNumeric } from '../common';

export const isValidCVCNumberInput = (value: string) => {
  if (isEmpty(value) || isNumeric(value)) return true;

  return false;
};
