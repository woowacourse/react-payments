import { PASSWORD_LENGTH } from "../constants";

export const isPasswordLengthExceeded = (value: string) => {
  return value.length > PASSWORD_LENGTH;
};

export const isPasswordLengthValid = (value: string) => {
  return value.length === PASSWORD_LENGTH;
};
