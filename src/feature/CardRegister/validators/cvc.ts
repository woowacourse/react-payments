import { CVC_LENGTH } from "../constants";

export const isCvcLengthValid = (value: string) => {
  return value.length === CVC_LENGTH;
};
