import { isEmpty, isNumeric } from '../common';

export const isValidCardNumbersInput = (value: string) => {
  if (isEmpty(value) || isNumeric(value)) return true;

  return false;
};

export const isValidCardTypeInput = (cardNumbers: string, validCardPrefix: string[]) => {
  if (isEmpty(cardNumbers)) return true;

  return validCardPrefix.some((prefix) => cardNumbers.startsWith(prefix) || prefix.startsWith(cardNumbers));
};
