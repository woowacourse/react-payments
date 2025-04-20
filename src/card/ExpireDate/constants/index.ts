import { ExpireDateInputKey } from "../types";

export const EXPIRE_DATE_ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INVALID_YEAR_LENGTH: "년도는 2자리만 입력 가능합니다.",
  INVALID_MONTH_LENGTH: "월은 1자 ~ 2자까지만 입력 가능합니다.",
  INVALID_MONTH_RANGE: "월은 1 ~ 12까지만 입력 가능합니다.",
} as const;

export const INITIAL_EXPIRE_DATE_STATE = {
  MM: { value: "", errorMessage: "" },
  YY: { value: "", errorMessage: "" },
} as const;

export const EXPIRE_DATE_KEYS = Object.keys(
  INITIAL_EXPIRE_DATE_STATE
) as ExpireDateInputKey[];
