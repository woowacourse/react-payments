import { ERROR_MESSAGE } from "../constants/errors";

const REGEX = Object.freeze({
  NUMBER: /^[0-9]+$/,
  STRING: /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/,
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
    const pureText = input[0] === "0" ? input.substring(1) : input;
    if (!REGEX.MONTH.test(pureText)) {
      throw new Error(ERROR_MESSAGE.INVALID_DATE);
    }
  },
};
