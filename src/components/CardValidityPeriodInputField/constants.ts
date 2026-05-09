export const MONTH_MAX_LENGTH = 2;
export const YEAR_MAX_LENGTH = 2;

export const HELPER_MESSAGE = {
  DEFAULT: "",
  NOT_NUMBER: "숫자만 입력 가능합니다.",
  INVALID_MONTH_RANGE: "월은 1부터 12 사이의 숫자로 입력해 주세요.",
  EMPTY_MONTH: "만료월을 입력해 주세요.",
  EMPTY_YEAR: "만료년을 입력해 주세요.",
  INVALID_MONTH_LENGTH: `만료월을 ${MONTH_MAX_LENGTH}자리 숫자로 입력해 주세요.`,
  INVALID_YEAR_LENGTH: `만료년을 ${YEAR_MAX_LENGTH}자리 숫자로 입력해 주세요.`,
} as const;

export type InputStatus = keyof typeof HELPER_MESSAGE;
