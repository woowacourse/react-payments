export const validateInput = (value: string): boolean => {
  const isNumber = !isNaN(Number(value));

  return !isNumber || value.length !== value.trim().length;
};
