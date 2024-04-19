export const makeStringArray = (count: number) => {
  return Array.from({ length: count }, () => "");
};

export const findFirstFilledElementIndex = (array: string[]) => {
  const targetIndex = array.findIndex((element) => element !== "");
  return targetIndex;
};
