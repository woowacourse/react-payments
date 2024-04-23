export const isOnlyDigit = (string: string) => {
  return /^[0-9]*$/.test(string);
};

export const isOnlyEnglishOrSpace = (string: string) => {
  return /^([a-zA-Z]+\s*)*$/.test(string);
};

export const isUnderLength = (string: string, length: number) => {
  return string.length <= length;
};

export const isUpperLength = (string: string, length: number) => {
  return string.length >= length;
};

export const isValidMonth = (string: string) => {
  return /^$|^(0[1-9]|1[0-2]|0|1)$/.test(string);
};

export const isValidYear = (string: string) => {
  return /^$|^(0?[0-9]|[1-9][0-9])$/.test(string);
};
