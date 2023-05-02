import { ALPHABET, NUMBERS } from './constants';

// TODO: 구체화 하기
export const formatExpireDate = (expireDate: string) => {
  return expireDate;
};

export const handleNumberInput = (data: string) => {
  if (!NUMBERS.includes(data[data.length - 1])) {
    data = data.slice(0, -1);
  }

  return data;
};

export const isAlphabetInput = (data: string) => {
  return ALPHABET.includes(data);
};

export const isNumberInput = (data: string) => {
  return NUMBERS.includes(data);
};

export const changeNumberToMask = (data: string) => {
  return '·'.repeat(data.length);
};

export const stringToUpperCase = (data: string) => {
  return data.toUpperCase();
};
