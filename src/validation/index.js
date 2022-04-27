import { REG_EXP } from "../constant/index";
export const checkCardNumber = (number) => {
  return REG_EXP.NUMBER_ONLY.test(number);
};
