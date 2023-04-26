export const regEx = {
  Alphabet: /^[a-zA-Z\s]*$/,
  Number: /^[0-9]*$/,
} as const;

const isMonth = (month: string) => {
  return Number(month) > 0 && Number(month) <= 12;
};

const isYear = (year: string) => {
  return Number(`20${year}`) >= new Date().getFullYear();
};

export const validateMonth = (target: HTMLInputElement) => {
  if (!isMonth(target.value)) target.value = target.value.slice(0, 1);
};

export const validateYear = (target: HTMLInputElement) => {
  if (!isYear(target.value)) target.value = target.value.slice(0, 1);
};

export const isNumber = (target: string) => {
  return regEx.Number.test(target);
};

export const isAlphabet = (target: string) => {
  return regEx.Alphabet.test(target);
};
