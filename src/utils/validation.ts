export const isNumber = (number: string) => {
  return !Number.isNaN(Number(number));
};

export const isValidLength = (number: string, validLength: number) => {
  return number.length === validLength;
};

export const isValidRange = (number: string, min: number, max: number) => {
  return Number(number) >= min && Number(number) <= max;
};
