const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const ALPHABET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

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

export const identity = (v: any) => v;
