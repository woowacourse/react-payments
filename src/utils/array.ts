export const isAllTrue = (arr: boolean[]) => {
  const isExistFalse = arr.some((value) => !value);
  return !isExistFalse;
};
