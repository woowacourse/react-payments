const ERROR_MESSAGE = {
  DEFAULT: "",
  SUCCESS: "",
  ONLY_NUMBER: "숫자만 입력 가능합니다.",
  RANGE_ERROR: "카드 번호는 0보다 커야 합니다.",
  EMPTY: "카드 번호를 입력해주세요.",
  INCOMPLETE: "카드 번호를 모두 입력해주세요.",
  INVALID_BRAND: "지원되지 않는 카드입니다. 다른 카드를 이용해주세요.",
} as const;

export type InputStatus = keyof typeof ERROR_MESSAGE;

export default ERROR_MESSAGE;
