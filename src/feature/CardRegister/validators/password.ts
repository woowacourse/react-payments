import { PASSWORD_LENGTH } from "../constants";

export const validateExceedPasswordLength = (value: string) => {
  return value.length > PASSWORD_LENGTH;
};

export const validatePasswordLength = (value: string) => {
  return value.length === PASSWORD_LENGTH;
};
