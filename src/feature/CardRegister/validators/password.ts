import { PASSWORD_LENGTH } from "../constants";

export const isPasswordLengthValid = (value: string) => {
  return value.length === PASSWORD_LENGTH;
};
