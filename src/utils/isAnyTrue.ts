export const isAnyTrue = (...values: boolean[]): boolean => {
  return values.some((value) => value);
};
