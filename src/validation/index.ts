import { REG_EXP } from '../constant';

export const checkNumberOnly = (number: string): boolean => {
  return REG_EXP.NUMBER_ONLY.test(number);
};

export const checkCardNumber = (cardNumber: string): boolean => {
  return cardNumber.length === 4;
};

export const checkExpiredMonth = (month: string): boolean => {
  return Number(month) >= 1 && Number(month) <= 12;
};

export const checkExpiredYear = (year: string): boolean => {
  const currentYear = String(new Date().getFullYear()).slice(2, 4);
  return checkNumberOnly(year) && year >= currentYear;
};

export const checkExpiredDate = (year: string, month: string): boolean => {
  const currentYear = String(new Date().getFullYear()).slice(2, 4);
  const currentMonth = new Date().getMonth() + 1;

  return year !== currentYear || currentMonth <= Number(month);
};

export const checkOwnerName = (name: string): boolean => {
  return (
    name.length === 0 ||
    (name.length <= 30 && REG_EXP.CHARACTER_ONLY.test(name))
  );
};

export const checkSecureCode = (secureCode: string): boolean => {
  return secureCode.length === 3;
};

export const checkPassword = (password: string): boolean => {
  return password.length === 1;
};
