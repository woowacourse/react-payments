export const regEx = {
  notAlphbet: /[^a-zA-Z]*/g,
  notNumber: /[^0-9]*/g,
} as const;

export const isNumber = (target: string) => {
  return !regEx.notNumber.test(target);
};

export const isAlphabet = (target: string) => {
  return !regEx.notAlphbet.test(target);
};
