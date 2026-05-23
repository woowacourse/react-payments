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

export const isPrefixInRange = (
  fullNumber: string,
  digitCount: number,
  start: number,
  end: number,
) => {
  const prefix = Number(fullNumber.slice(0, digitCount));

  return prefix >= start && prefix <= end;
};

export const isLengthBetween = (
  value: string,
  minLength: number,
  maxLength: number,
) => {
  return value.length >= minLength && value.length <= maxLength;
};
