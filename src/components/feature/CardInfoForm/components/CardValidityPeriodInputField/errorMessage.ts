const ERROR_MESSAGE = {
  DEFAULT: "",
  ONLY_NUMBER: "숫자만 입력 가능합니다.",
  MONTH_RANGE_ERROR:
    "올바른 입력범위가 아닙니다. 1월부터 12월 사이여야 합니다.",
  YEAR_RANGE_ERROR: "올바른 입력범위가 아닙니다. 00부터 99 사이여야 합니다.",
  EMPTY: "값을 입력해 주세요.",
} as const;

export type InputStatus = keyof typeof ERROR_MESSAGE;

export default ERROR_MESSAGE;
