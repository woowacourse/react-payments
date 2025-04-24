export const isPositiveInteger = (value: string): boolean => {
  return /^\d*$/.test(value);
};

export const isEmpty = (value: string): boolean => {
  return value === "";
};
