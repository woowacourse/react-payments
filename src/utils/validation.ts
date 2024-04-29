export const isNotEmpty = (value: string) => {
  return value !== '';
};

export const isNumber = (number: string) => {
  return !Number.isNaN(Number(number));
};

export const isValidForm = (number: string, regExp: RegExp) => {
  return regExp.test(number);
};

export const isValidLength = (number: string, validLength: number) => {
  return number.length === validLength;
};

export const isValidRange = (number: number, min: number, max: number) => {
  return number >= min && number <= max;
};

export const isAllValid = (validations: boolean[]) => {
  return validations.every(Boolean);
};
