import { ALPHABET, MONTH_DATA, NUMBERS } from '../../../utils/constants';

export const isValidExpiredMonthFormat = (str: string) => {
  return MONTH_DATA.includes(str) ? 'VALID' : 'INVALID';
};

export const isValidExpiredYearFormat = (str: string) => {
  const strToNum = +str;
  return Number.isInteger(strToNum) && strToNum >= 0 ? 'VALID' : 'INVALID';
};

export const isValidSecurityCode = (str: string) => {
  const strToNum = +str;
  return str.length === 3 && Number.isInteger(strToNum) ? 'VALID' : 'INVALID';
};

export const isValidOwnerName = (str: string) => {
  const charList = str.split('').filter((char) => ALPHABET.includes(char));

  return str.length === 30 && charList.length === str.length ? 'VALID' : 'INVALID';
};

export const isValidPassword = (str: string) => {
  return str.length === 1 && NUMBERS.includes(str) ? 'VALID' : 'INVALID';
};
