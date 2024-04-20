import { isEmpty, isNumeric } from '../common';

export const isValidMonthInput = (value: string) => {
  if (isEmpty(value)) return true;
  if (!isNumeric(value)) return false;

  const month = parseInt(value, 10);

  return month >= 1 && month <= 12;
};

export const isValidYearInput = (value: string) => {
  if (isEmpty(value) || isNumeric(value)) return true;

  return false;
};
