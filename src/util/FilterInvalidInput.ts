const NOT_NUMBER_REGEX = /[^0-9]/gi;

export const filterBlankAndNotANumber = (value: string) => {
  return value.trim().replace(NOT_NUMBER_REGEX, '');
};
