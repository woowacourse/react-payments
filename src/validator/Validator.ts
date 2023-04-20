export const isNumeric = (value: string) => {
  const REGEX = /^[0-9]*$/;

  return REGEX.test(value);
};
