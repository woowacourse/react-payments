export const PASSWORD_MAX_LENGTH = 2;

export const HELPER_MESSAGE = {
  DEFAULT: "",
  NOT_NUMBER: "숫자만 입력 가능합니다.",
  EMPTY: "비밀번호를 입력해 주세요.",
  INVALID_LENGTH: `숫자 ${PASSWORD_MAX_LENGTH}자리를 모두 입력해 주세요.`,
} as const;

export type InputStatus = keyof typeof HELPER_MESSAGE;
