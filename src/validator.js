import { isOverMaxLength, isOutOfRange } from './util';
import { ERROR_MESSAGE, STRING } from './constants';

export const checkIsNaN = (value) => {
  if (Number.isNaN(+value) || value.includes(STRING.BLANK) || value.includes(STRING.DOT)) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  }
};

export const checkMaxLength = (value, length) => {
  if (isOverMaxLength(value, length)) {
    throw new Error(ERROR_MESSAGE.OVER_MAX_LENGTH);
  }
};

export const checkRange = (min, max, value) => {
  if (isOutOfRange(min, max, +value)) {
    throw new Error(ERROR_MESSAGE.INVALID_MONTH_RANGE);
  }
};

export const checkValidDate = (expireMonth, expireYear) => {
  if (expireMonth && expireYear && expireYear.length === 2) {
    const now = new Date();
    const currentYear = String(now.getFullYear()).substring(2);
    const currentMonth = now.getMonth() + 1;

    if (+expireYear < +currentYear) {
      throw new Error(ERROR_MESSAGE.INVALID_DATE);
    }
    if (+expireYear === +currentYear) {
      if (+expireMonth < currentMonth) {
        throw new Error(ERROR_MESSAGE.INVALID_DATE);
      }
    }
  }
};

export const validator = (validate, ...args) => {
  return {
    validate: () => validate(...args),
  };
};
