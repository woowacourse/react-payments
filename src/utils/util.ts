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

export const getBackgroundStyleByCardCompany = (cardCompany: string) => {
  switch (cardCompany) {
    case '현대카드':
      return 'hyundai';
    case 'BC카드':
      return 'bc';
    case '신한카드':
      return 'sinhan';
    case '카카오뱅크':
      return 'kakao';
    case '우리카드':
      return 'woori';
    case '국민카드':
      return 'kookmin';
    case '하나카드':
      return 'hana';
    case '롯데카드':
      return 'lotte';
    default:
      return 'default-company';
  }
};
