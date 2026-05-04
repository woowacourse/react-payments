export const isLengthMatch = (length: number, value: string) => {
  if (length !== value.length) return false;
  return true;
};
