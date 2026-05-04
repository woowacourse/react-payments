export const isNumericInput = (value: string) => /^\d*$/.test(value);

export const isExceedTwoDigits = (value: string) => value.length > 2;

export const isValidMonth = (value: string) => {
  const month = Number(value);
  return month >= 1 && month <= 12;
};

export const isTwoDigits = (value: string) => {
  return value.length === 2;
};
