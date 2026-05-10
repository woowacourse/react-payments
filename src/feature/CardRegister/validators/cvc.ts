import { CVC_LENGTH } from "../constants";

export const isCvcLengthExceeded = (value: string) => {
  return value.length > CVC_LENGTH;
};

export const isCvcLengthValid = (value: string) => {
  return value.length === CVC_LENGTH;
};
