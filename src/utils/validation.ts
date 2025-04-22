export const isNotNumber = (value: string): boolean => {
  return Number.isNaN(Number(value));
};

export const isEmpty = (value: string): boolean => {
  return value === "";
};
