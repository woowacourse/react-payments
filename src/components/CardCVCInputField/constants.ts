export const CVC_MAX_LENGTH = 3;

export const HELPER_MESSAGE = {
  DEFAULT: "",
  NOT_NUMBER: "숫자만 입력 가능합니다.",
  EMPTY: "CVC 번호를 입력해 주세요.",
  INVALID_LENGTH: `숫자 ${CVC_MAX_LENGTH}자리를 모두 입력해 주세요.`,
} as const;

export type InputStatus = keyof typeof HELPER_MESSAGE;
