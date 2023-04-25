export const isAlphabetInput = (data: string): boolean => {
  return /[A-Z]/g.test(data);
};

export const isNumberInput = (data: string): boolean => {
  return /[0-9]/g.test(data);
};

export const stringToUpperCase = (data: string): string => {
  return data.toUpperCase();
};
