import { CARD_EXPIRATION, CARD_NUMBER, CARD_OWNER } from './Condition';

export const ERROR_MESSAGE = {
  INVALID_EXPIRATION_MONTH: `유효 기간의 월은 0${CARD_EXPIRATION.MIN_MONTH_RANGE} ~ ${CARD_EXPIRATION.MAX_MONTH_RANGE} 사이의 두 자리 숫자여야 합니다.`,
  INVALID_EXPIRATION_YEAR: '유효 기간의 년도는 두 자리 숫자여야 합니다.',
  INVALID_CARD_NUMBER: `카드 번호는 ${CARD_NUMBER.MAX_LENGTH}자리 숫자여야 합니다.`,
  INVALID_CARD_OWNER: `소유자 이름은 ${CARD_OWNER.MAX_LENGTH}자 이하의 영어 대소문자여야 합니다.`,
} as const;
