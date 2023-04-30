const NOT_INTEGER_REGEX = /[^0-9\s]/gi;

export const isNumber = (value: string) => {
  return !value.match(NOT_INTEGER_REGEX);
};
