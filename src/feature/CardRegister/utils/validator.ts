export const isNumeric = (value: string) => {
  return /^\d*$/.test(value);
};

export const isWithinMaxLength = (value: string, maxLength: number) => {
  return value.length <= maxLength;
};

export const isExactLength = (value: string, length: number) => {
  return value.length === length;
};

export const isValidMonth = (value: string) => {
  const month = Number(value);

  return month >= 1 && month <= 12;
};
