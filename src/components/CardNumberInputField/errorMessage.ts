const ERROR_MESSAGE = {
  DEFAULT: "",
  ONLY_NUMBER: "숫자만 입력 가능합니다.",
  INVALID_LENGTH: "카드 번호는 각 유닛당 4자리여야 합니다.",
  RANGE_ERROR: "카드 번호는 0000부터 9999 사이여야 합니다.",
  EMPTY: "카드 번호를 입력해주세요.",
} as const;

export type InputStatus = keyof typeof ERROR_MESSAGE;

export default ERROR_MESSAGE;
