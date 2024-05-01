import { ERROR_MESSAGE } from "../constants/message";

const validResult = { isError: false, message: "" } as const;

export const validateOnlyDigit = (string: string) => {
  if (!/^[0-9]*$/.test(string)) {
    return { isError: true, message: ERROR_MESSAGE.notDigit };
  }
  return validResult;
};

export const validateOnlyEnglishWithSpace = (string: string) => {
  if (!/^([a-zA-Z]+\s*)*$/.test(string)) {
    return { isError: true, message: ERROR_MESSAGE.notEnglish };
  }
  return validResult;
};

export const validateLength = (string: string, length: number) => {
  if (string.length < length) {
    return {
      isError: true,
      message: `${length}${ERROR_MESSAGE.underLengthTail}`,
    };
  }
  return validResult;
};

export const validateMonth = (string: string) => {
  if (!/^$|^(0[1-9]|1[0-2]|0|1)$/.test(string)) {
    return { isError: true, message: ERROR_MESSAGE.wrongMonth };
  }
  return validResult;
};

export const validateYear = (string: string) => {
  if (!/^$|^(0?[0-9]|[1-9][0-9])$/.test(string)) {
    return { isError: true, message: ERROR_MESSAGE.wrongYear };
  }
  return validResult;
};
