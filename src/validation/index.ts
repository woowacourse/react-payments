import { REG_EXP } from 'constant/index';

export const checkNumberOnly = (input: string): boolean => {
  return REG_EXP.NUMBER_ONLY.test(input);
};

export const checkCardNumber = (cardNumber: string): boolean => {
  return checkNumberOnly(cardNumber) && cardNumber.length === 4;
};

export const checkExpiredMonth = (month: string): boolean => {
  return checkNumberOnly(month) && Number(month) >= 1 && Number(month) <= 12;
};

export const checkExpiredYear = (year: string): boolean => {
  const nowYear = String(new Date().getFullYear()).slice(2, 4);
  return checkNumberOnly(year) && year > nowYear;
};

export const checkOwnerName = (name: string): boolean => {
  return name.length === 0 || (name.length < 30 && REG_EXP.CHARACTER_ONLY.test(name));
};

export const checkSecureCode = (secureCode: string): boolean => {
  return checkNumberOnly(secureCode) && secureCode.length === 3;
};

export const checkPassword = (password: string): boolean => {
  return checkNumberOnly(password) && password.length === 1;
};

export const checkCardNickName = (nickName: string): boolean => {
  return nickName.length <= 20;
};
