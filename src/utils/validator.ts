export const checkIsNumber = (arg: number) => {
  return !Number.isNaN(arg);
};

export const checkIsInt = (arg: number) => {
  return checkIsNumber(arg) && arg === parseInt(`${arg}`);
};

export const checkLengthMatches = (input: string, expectedLength: number) => {
  return input.length === expectedLength;
};

export const validateRange = (arg: number, min: number, max: number) => {
  return arg >= min && arg <= max;
};

export const validateMonthRange = (month: number) => {
  return validateRange(month, 1, 12);
};
