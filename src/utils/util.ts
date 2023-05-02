import { ALPHABET, NUMBERS } from './constants';

export const formatExpireDate = (expireDate: string): string => {
  return expireDate;
};

export const handleNumberInput = (data: string): string => {
  if (!NUMBERS.includes(data[data.length - 1])) {
    data = data.slice(0, -1);
  }

  return data;
};

export const isAlphabetInput = (data: string): boolean => {
  return ALPHABET.includes(data);
};

export const isNumberInput = (data: string): boolean => {
  return NUMBERS.includes(data);
};

export const changeNumberToMask = (data: string): string => {
  return '·'.repeat(data.length);
};

export const stringToUpperCase = (data: string): string => {
  return data.toUpperCase();
};
