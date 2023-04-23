export const CARD_NUMBER_DIGITS = 16;
export const CARD_NUMBER_INPUTS_LENGTH = 4; // input 개수: 4개
export const CARD_NUMBER_INPUT_SIZE = 4; // input 1개: 카드번호 4자리
export const MONTH_SIZE = 2;
export const YEAR_SIZE = 2;
export const DATE_TEXT = 'MM/YY';
export const MAX_NAME_SIZE = 30;
export const OWNER_NAME_TEXT = 'NAME';
export const SECURITY_CODE_SIZE = 3;
export const PASSWORD_SIZE = 2;
export const PASSWORD_START_INDEX = 2;
export const PASSWORD_TEXT = '•';

export const ERROR = {
  IS_NOT_NUMBER: '숫자를 입력해주세요.',
  INVALID_CARD_NUMBER: `유효하지 않은 카드 번호입니다. ${CARD_NUMBER_DIGITS}자리 숫자를 입력해주세요.`,
  INVALID_EXPIRATION_DATE: `유효하지 않은 만료일입니다. 현재 월/연도 이후의 날짜를 입력해주세요.`,
  INVALID_OWNER_NAME: `유효하지 않은 이름입니다. 최대 ${MAX_NAME_SIZE}자의 영문으로 입력해주세요.`,
  INVALID_SECURITY_CODE: `유효하지 않은 보안코드입니다. ${SECURITY_CODE_SIZE}자리의 숫자를 입력해주세요.`,
  INVALID_PASSWORD: `유효하지 않은 비밀번호입니다. ${PASSWORD_SIZE}자리의 숫자를 입력해주세요.`,
} as const;
