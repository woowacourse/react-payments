import { ERROR_MESSAGE, STRING } from './constants';

export const isOverMaxLength = (value, max) => value.length > max;

export const isOutOfRange = (min, max, value) => value < min || value > max;

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
