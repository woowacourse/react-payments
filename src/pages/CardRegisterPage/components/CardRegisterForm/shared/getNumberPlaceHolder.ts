export const getNumberPlaceHolder = (inputLength: number) => {
  return Array.from({ length: inputLength }, (_, idx) => idx + 1).join("");
};
