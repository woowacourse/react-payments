export const validateNumericInput = (value: string) => /^\d*$/.test(value);

export const validateExceedTwoDigits = (value: string) => value.length > 2;

export const validateMonth = (value: string) => {
  const month = Number(value);
  return month >= 1 && month <= 12;
};

export const validateTwoDigits = (value: string) => {
  return value.length === 2;
};
