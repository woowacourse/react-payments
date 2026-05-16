export const HELPER_MESSAGE = {
  DEFAULT: "",
  NOT_NUMBER: "숫자만 입력 가능합니다.",
  EMPTY: "카드 번호를 입력해 주세요.",
  INVALID_LENGTH: `각 필드당 자릿 수를 모두 입력해 주세요.`,
} as const;

export type InputStatus = keyof typeof HELPER_MESSAGE;
