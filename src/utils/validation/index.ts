export const hasSpace = (inputValue: string) => {
  return inputValue.includes(' ');
};
export const isNotNumber = (inputValue: string) => {
  return isNaN(Number(inputValue));
};

export const isLengthOver = (inputValue: string, length: number) => {
  return inputValue.length > length;
};

export const isNotValidMonth = (inputValue: string) => {
  const monthValue = Number(inputValue);
  return monthValue < 1 || monthValue > 12;
};

export const isAlphabetOrSpace = (inputValue: string) => {
  return inputValue.match(/^[a-zA-Z\s]+$/) !== null || inputValue === '';
};

export const isLengthBelow = (inputValue: string, length: number) => {
  return inputValue.length < length;
};
