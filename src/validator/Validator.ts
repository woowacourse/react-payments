export const isNumeric = (value: string) => {
  const REGEX = /^[0-9]*$/;

  return REGEX.test(value);
};

export const isValidMonth = (value: string) => {
  if (!isNumeric(value)) return;

  const number = Number(value);

  return 0 <= number && number <= 12;
};

export const isCapitalAlphabetic = (value: string) => {
  const REGEX = /^[A-Z]*$/;

  return REGEX.test(value);
};

export const isFulfilledObject = (obj: Record<string, string>, length: number) => {
  return Object.values(obj).every((value) => value.length === length);
};

export const isFulfilledString = (value: string, length: number) => {
  return value.length === length;
};
