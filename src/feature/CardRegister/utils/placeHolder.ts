export const getPlaceHolder = (inputLength: number) => {
  return Array.from({ length: inputLength }, (_, idx) => idx + 1).join("");
};
