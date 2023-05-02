import { ALPHABET, NUMBERS } from '../../../utils/constants';

export const isSelectCardType = (str: string) => {
  return str.length === 0 ? 'INVALID' : 'VALID';
};

export const isValidSecurityCode = (str: string) => {
  const strToArr = str.split('');
  return str.length === 3 && strToArr.every((element) => NUMBERS.includes(element))
    ? 'VALID'
    : 'INVALID';
};

export const isValidOwnerName = (str: string) => {
  const charList = str.split('').filter((char) => ALPHABET.includes(char));

  return str.length >= 0 && str.length <= 30 && charList.length === str.length
    ? 'VALID'
    : 'INVALID';
};

export const isValidPassword = (str: string) => {
  return str.length === 1 && NUMBERS.includes(str) ? 'VALID' : 'INVALID';
};

export const isValidCardNumber = (str: string) => {
  const strToArr = str.split('');
  return str.length === 4 && strToArr.every((element) => NUMBERS.includes(element))
    ? 'VALID'
    : 'INVALID';
};

export const isValidCardAlias = (str: string) => {
  return str.length !== 0 ? 'VALID' : 'INVALID';
};
