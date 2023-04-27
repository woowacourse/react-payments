import { getCurrentYear } from "../utils/date";

const REGEX = Object.freeze({
  NUMBER: /^[0-9]+$/,
  STRING: /^[ㄱ-ㅎ가-힣a-zA-Z]+$/,
  MONTH: /^(1[0-2]|[1-9])$/,
});

export const validation = {
  isValueExist(input: string) {
    return input !== "";
  },

  month(input: string) {
    validation.isNumber(input);
    validation.isCorrectMonth(input);
  },

  isNumber(input: string) {
    if (!REGEX.NUMBER.test(input)) {
      return false;
    }
    return true;
  },

  isString(input: string) {
    if (!REGEX.STRING.test(input)) {
      return false;
    }
    return true;
  },

  isCorrectMonth(input: string) {
    if (!REGEX.MONTH.test(input)) {
      return false;
    }
    return true;
  },

  isCorrectYear(input: string) {
    if (getCurrentYear() > Number(input)) {
      return false;
    }
    return true;
  },
};
