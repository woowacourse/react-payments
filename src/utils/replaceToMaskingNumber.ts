import SIGN from "../constants/sign";

const replaceToMaskingNumber = (value: string | null): string => {
  if (!value) return SIGN.empty;

  const maskingChar = SIGN.mask;

  return maskingChar.repeat(value.toString().length);
};

export default replaceToMaskingNumber;
