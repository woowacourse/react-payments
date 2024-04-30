import SIGN from "../constants/sign";

const replaceToAsterisk = (value: string | null): string => {
  if (!value) return SIGN.empty;

  const maskingChar = SIGN.asteriskMask;

  return maskingChar.repeat(value.toString().length);
};

export default replaceToAsterisk;
