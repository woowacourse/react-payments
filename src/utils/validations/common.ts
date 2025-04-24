export const isPositiveInteger = (value: string): boolean => {
  return /^\d*$/.test(value);
};

export const isEmpty = (value: string): boolean => {
  return value === "";
};

export const hasExactLength = (
  value: string,
  expectedLength: number
): boolean => {
  return value.length === expectedLength;
};
