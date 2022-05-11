export const hasSpace = inputValue => {
  return inputValue.includes(' ');
};
export const isNotNumber = inputValue => {
  return isNaN(Number(inputValue));
};

export const isNotKoreanOrSpace = inputValue => {
  return inputValue.match(/^[ㄱ-ㅎ|가-힣\s]+$/) !== null || inputValue === '';
};

export const isLengthOver = (inputValue, length) => {
  return inputValue.length > length;
};

export const isNotValidMonth = inputValue => {
  const monthValue = Number(inputValue);
  return monthValue < 1 || monthValue > 12;
};

export const isAlphabetOrSpace = inputValue => {
  return inputValue.match(/^[a-zA-Z\s]+$/) !== null || inputValue === '';
};

export const isLengthBelow = (inputValue, length) => {
  return inputValue.length < length;
};

export const isOverlappedValue = (inputValue, wholeValue) => {
  return inputValue in wholeValue;
};

export const isBlankValue = inputValue => {
  return inputValue.replace(/\s/g, '') === '';
};