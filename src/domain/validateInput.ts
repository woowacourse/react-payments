import { BlockedInputError, NonBlockedInputError } from "../errors/InputError";

import { ERROR_MESSAGE } from "../constants/message";

export const validateOnlyDigit = (string: string) => {
  if (!/^[0-9]*$/.test(string)) {
    throw new BlockedInputError("올바른 숫자(0~9)를 입력해주세요");
  }
};

export const validateOnlyEnglishWithSpace = (string: string) => {
  if (!/^([a-zA-Z]+\s*)*$/.test(string)) {
    throw new BlockedInputError("영어로 입력해주세요");
  }
};

export const validateLength = (string: string, length: number) => {
  if (string.length < length) {
    throw new NonBlockedInputError(`${length}자리로 입력해주세요`);
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
