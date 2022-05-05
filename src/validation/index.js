import { REG_EXP } from '../constant';

export const checkNumberOnly = (number) => {
  return REG_EXP.NUMBER_ONLY.test(number);
};

export const checkCardNumber = (cardNumber) => {
  return cardNumber.length === 4;
};

export const checkExpiredMonth = (month) => {
  month = Number(month);
  return month >= 1 && month <= 12;
};

export const checkExpiredYear = (year) => {
  const nowYear = String(new Date().getFullYear()).slice(2, 4);
  return checkNumberOnly(year) && year > nowYear;
};

export const checkOwnerName = (name) => {
  return (
    name.length === 0 ||
    (name.length <= 30 && REG_EXP.CHARACTER_ONLY.test(name))
  );
};

export const checkSecureCode = (secureCode) => {
  return secureCode.length === 3;
};

export const checkPassword = (password) => {
  return password.length === 1;
};
