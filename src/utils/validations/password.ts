import { isPositiveInteger } from "./common";

export const isErrorPassword = (value: string) => {
  if (!isPositiveInteger(value)) return "숫자만 입력 가능합니다";
  return null;
};
