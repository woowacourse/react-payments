import { BlockedInputError, NonBlockedInputError } from "../errors/InputError";

import { ERROR_MESSAGE } from "../constants/message";

export const validateOnlyDigit = (string: string) => {
  if (!/^[0-9]*$/.test(string)) {
    throw new BlockedInputError(ERROR_MESSAGE.notDigit);
  }
};

export const validateOnlyEnglishWithSpace = (string: string) => {
  if (!/^([a-zA-Z]+\s*)*$/.test(string)) {
    throw new BlockedInputError(ERROR_MESSAGE.notEnglish);
  }
};

export const validateLength = (string: string, length: number) => {
  if (string.length < length) {
    throw new NonBlockedInputError(`${length}${ERROR_MESSAGE.underLengthTail}`);
  }
};

export const validateMonth = (string: string) => {
  if (!/^$|^(0[1-9]|1[0-2]|0|1)$/.test(string)) {
    throw new BlockedInputError(ERROR_MESSAGE.wrongMonth);
  }
};

export const validateYear = (string: string) => {
  if (!/^$|^(0?[0-9]|[1-9][0-9])$/.test(string)) {
    throw new BlockedInputError(ERROR_MESSAGE.wrongYear);
  }
};
