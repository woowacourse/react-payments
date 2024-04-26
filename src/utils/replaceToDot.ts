import SIGN from "../constants/sign";

const replaceToDot = (value: string | null): string => {
  if (!value) return SIGN.empty;

  const maskingChar = SIGN.dotMask;

  return maskingChar.repeat(value.toString().length);
};

export default replaceToDot;
