export const CARD_NUMBER_DIGITS = 16;
export const MONTH_LENGTH = 2;
export const YEAR_LENGTH = 2;
export const MAX_NAME_LENGTH = 30;
export const SECURITY_CODE_LENGTH = 3;
export const PASSWORD_LENGTH = 2;
export const PASSWORD_START_INDEX = 2;
export const PASSWORD_TEXT = '•';

export const ERROR = {
  IS_NOT_NUMBER: '숫자를 입력해주세요.',
  INVALID_CARD_NUMBER: `유효하지 않은 카드 번호입니다. ${CARD_NUMBER_DIGITS}자리 숫자를 입력해주세요.`,
  INVALID_EXPIRATION_DATE: '유효하지 않은 만료일입니다. MM/YY형식의 숫자로 입력해주세요.',
  INVALID_OWNER_NAME: `유효하지 않은 이름입니다. 최대 ${MAX_NAME_LENGTH}자의 영문으로 입력해주세요.`,
  INVALID_SECURITY_CODE: `유효하지 않은 보안코드입니다. ${SECURITY_CODE_LENGTH}자리의 숫자를 입력해주세요.`,
  INVALID_PASSWORD: `유효하지 않은 비밀번호입니다. ${PASSWORD_LENGTH}자리의 숫자를 입력해주세요.`,
} as const;
