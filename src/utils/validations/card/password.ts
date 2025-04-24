import { MAX_LENGTH } from "../../../constants/constants";
import { hasExactLength, isPositiveInteger } from "../common";

export const isErrorPassword = (value: string) => {
  if (!isPositiveInteger(value)) return "숫자만 입력 가능합니다";
  if (!hasExactLength(value, MAX_LENGTH.password))
    return "비밀번호를 모두 입력해 주세요";
  return null;
};
