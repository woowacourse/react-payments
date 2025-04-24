export const isNotPositiveInteger = (value: string): boolean => {
  return !/^\d*$/.test(value);
};

export const isEmpty = (value: string): boolean => {
  return value === "";
};
