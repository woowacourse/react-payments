export const isNotNumber = inputValue => {
  return isNaN(Number(inputValue));
};

export const isLengthOver = inputValue => {
  return inputValue.length > 4;
};
