export const CARD_EXPIRATION = {
  INPUT_FIELD_COUNT: 2,
  MAX_LENGTH: 2,
  MIN_MONTH_RANGE: 1,
  MAX_MONTH_RANGE: 12,
} as const;

export const CARD_NUMBER = {
  INPUT_FIELD_COUNT: 4,
  MAX_LENGTH: 4,
} as const;

export const CARD_OWNER = {
  /**
   * 카드 소유자명을 검증하기 위한 규칙을 정합니다.
   *
   * - 소유자명은 영어 대소문자와 공백 문자(' ')만 허용하며, 첫 글자는 반드시 영어 대소문자여야 합니다.
   * - 소유자명은 최대 30글자까지 입력 가능합니다.
   */
  INPUT_FIELD_COUNT: 1,
  VALID_REGEX: /^[a-zA-Z][a-zA-Z ]*$/,
  MAX_LENGTH: 30,
} as const;

export const CARD_PREFIX_PATTERNS = {
  /**
   * 카드 번호의 패턴에 따른 카드사 식별 규칙을 정합니다.
   *
   * - VISA : 4로 시작하는 카드 번호
   * - Master Card : 51 ~ 55 사이의 숫자로 시작하는 카드 번호
   */
  VISA_PREFIX: 4,
  MASTER_CARD_PREFIX_MIN: 51,
  MASTER_CARD_PREFIX_MAX: 55,
} as const;
