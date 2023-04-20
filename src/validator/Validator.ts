export const isNumeric = (value: string) => {
  const REGEX = /^[0-9]*$/;

  return REGEX.test(value);
};

export const isValidMonth = (value: string) => {
  if (!isNumeric(value)) return;

  const number = Number(value);

  return 0 <= number && number <= 12;
};
