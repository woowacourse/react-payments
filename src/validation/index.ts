import { ERROR_MESSAGE } from "../constants/errors";

const REGEX = Object.freeze({
  NUMBER: /^[0-9]+$/,
  STRING: /^[ㄱ-ㅎ가-힣a-zA-Z]+$/,
  MONTH: /^(1[0-2]|[1-9])$/,
});

export const validation = {
  month(input: string) {
    validation.isNumber(input);
    validation.isCorrectMonth(input);
  },

  isNumber(input: string) {
    if (!REGEX.NUMBER.test(input)) {
      throw new Error(ERROR_MESSAGE.ONLY_NUMBER);
    }
  },

  isString(input: string) {
    if (!REGEX.STRING.test(input)) {
      throw new Error(ERROR_MESSAGE.ONLY_STRING);
    }
  },

  isCorrectMonth(input: string) {
    if (!REGEX.MONTH.test(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_DATE);
    }
  },
};
