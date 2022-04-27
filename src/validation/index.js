import { REG_EXP } from "../constant/index";
export const checkCardNumber = (number) => {
  return REG_EXP.NUMBER_ONLY.test(number);
};

export const checkExpiredMonth = (month) => {
  return checkCardNumber(month) && month >= 1 && month <= 12;
};

export const checkExpiredYear = (year) => {
  const nowYear = String(new Date().getFullYear()).slice(2, 4);
  return checkCardNumber(year) && year > nowYear;
};
