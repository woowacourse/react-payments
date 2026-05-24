export const isNumericString = (str: string) => {
  const regex = /^\d+$/;
  return regex.test(str);
};

export const isValidInputNumber = (input: string, maxLength: number) => {
  if (input !== '' && !isNumericString(input)) return false;
  if (input.length > maxLength) return false;
  return true;
};
