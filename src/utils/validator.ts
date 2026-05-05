export const checkIsOnlyDigits = (input: string) => /^\d*$/.test(input);

export const checkLengthMatches = (input: string, expectedLength: number) => {
  return input.length === expectedLength;
};

export const validateRange = (arg: number, min: number, max: number) => {
  return arg >= min && arg <= max;
};

export const validateMonthRange = (month: number) => {
  return validateRange(month, 1, 12);
};
