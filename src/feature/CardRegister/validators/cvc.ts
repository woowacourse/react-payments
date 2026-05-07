import { CVC_LENGTH } from "../constants";

export const validateExceedCvcLength = (value: string) => {
  return value.length > CVC_LENGTH;
};

export const validateCvcLength = (value: string) => {
  return value.length === CVC_LENGTH;
};
