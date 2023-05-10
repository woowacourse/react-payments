import { REGULAR_EXPRESSION } from "../constant/etc";

export const validateNumber = (value: string) => {
  const regExp = REGULAR_EXPRESSION.ONE_NUMBER;

  return regExp.test(value);
};
