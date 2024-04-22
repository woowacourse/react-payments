export const isNumeric = (value: string) => {
  return /^\d+$/.test(value);
};

export const isEmpty = (value: string) => {
  return value === '';
};

export const isAlphabetic = (value: string) => {
  return /^[A-Za-z]+$/.test(value);
};
