export const isOverMaxLength = (value, max) => value.length > max;

export const isOutOfRange = (min, max, value) => value < min || value > max;

export const isNotNumber = (value) => Number.isNaN(value) || !Number.isInteger(value);
