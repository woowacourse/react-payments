import ERROR_MESSAGES from '../constants/error';
import { DOUBLE_BLANK, UPPERCASE_AND_SPACE_ONLY } from '../constants/system';
import { isValidMonth, isValidYear } from '../utils/checkDateRange';

function checkTrimBlank(n: string) {
  if ((n.trim() === '' && n !== '') || n.trim().length !== n.length) {
    throw new Error(ERROR_MESSAGES.INVALID_TRIM_BLANK);
  }
}

function checkDoubleBlank(n: string) {
  if (DOUBLE_BLANK.test(n)) {
    throw new Error(ERROR_MESSAGES.INVALID_DOUBLE_BLANK);
  }
}

function validateNumber(n: string) {
  if (!Number.isInteger(Number(n))) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_NUMBER);
  }
}

function checkEmpty(n: string) {
  if (n.length === 0) {
    return true;
  }
}

function empty(n: string) {
  if (n.length === 0) {
    throw new Error('빈칸');
  }
}

function validateMonth(n: string) {
  if (checkEmpty(n)) return;
  const month = Number(n);
  if (!isValidMonth(month)) {
    throw new Error(ERROR_MESSAGES.INVALID_MONTH);
  }
}

function validateYear(n: string) {
  if (checkEmpty(n)) return;
  const year = Number(n);
  if (!isValidYear(year)) {
    throw new Error(ERROR_MESSAGES.INVALID_YEAR);
  }
}

function validateUpperCase(str: string) {
  if (!UPPERCASE_AND_SPACE_ONLY.test(str) && str.length !== 0) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_UPPERCASE);
  }
}

export function checkLength(n: string, length: number) {
  if (n.length < length) {
    return false;
  }
  return true;
}

export function validateLength(n: string, length: number) {
  if (!checkLength(n, length)) {
    throw new Error(ERROR_MESSAGES.INVALID_LENGTH);
  }
}

type InputValidationMap = Record<string, (n: string) => void>;

export const InputValidation: InputValidationMap = {
  cardNumber: (n: string) => {
    checkTrimBlank(n);
    validateNumber(n);
    empty(n);
  },
  month: (n: string) => {
    checkTrimBlank(n);
    validateNumber(n);
    validateMonth(n);
  },
  year: (n: string) => {
    checkTrimBlank(n);
    validateNumber(n);
    validateYear(n);
  },
  userName: (n: string) => {
    checkDoubleBlank(n);
    validateUpperCase(n);
  },
  cvc: (n: string) => {
    checkTrimBlank(n);
    validateNumber(n);
  },
  password: (n: string) => {
    checkTrimBlank(n);
    validateNumber(n);
  },
};
