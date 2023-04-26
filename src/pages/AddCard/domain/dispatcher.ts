import { MONTH_DATA } from '../../../utils/constants';

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
