import { ERROR_MESSAGE } from 'constant/index';

const isOverMaxLength = (value, max) => value.length > max;

const isOutOfRange = (min, max, value) => value < min || value > max;

const isNotInteger = (value) => Number.isNaN(value) || !Number.isInteger(value);

export const validNumber = (value) => {
  if (isNotInteger(value)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
};

export const validMaxLength = (value, max) => {
  if (isOverMaxLength(value, max)) throw new Error(ERROR_MESSAGE.OVER_MAX_LENGTH);
};

export const validRange = (min, max, value) => {
  if (isOutOfRange(min, max, +value)) throw new Error(ERROR_MESSAGE.INVALID_MONTH_RANGE);
};
