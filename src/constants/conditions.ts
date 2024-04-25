export const CARD_EXPIRATION = {
  /**
   * 카드 유효 기간을 검증하기 위한 규칙을 정합니다.
   *
   * - 오직 0 ~ 9 사이의 숫자 입력만 허용합니다.
   * - 양수/음수 기호(+, -), 소수점 등의 입력을 허용하지 않기 위해 정규식으로 검증합니다.
   */
  INPUT_FIELD_COUNT: 2,
  INVALID_CHARS_REGEX: /[^0-9]/g,
  MAX_LENGTH: 2,
  MIN_MONTH_RANGE: 1,
  MAX_MONTH_RANGE: 12,
} as const;

export const CARD_NUMBER = {
  /**
   * 카드 번호를 검증하기 위한 규칙을 정합니다.
   *
   * - 오직 0 ~ 9 사이의 숫자 입력만 허용합니다.
   * - 양수/음수 기호(+, -), 소수점 등의 입력을 허용하지 않기 위해 정규식으로 검증합니다.
   */
  INPUT_FIELD_COUNT: 4,
  INVALID_CHARS_REGEX: /[^0-9]/g,
  MAX_LENGTH: 4,
  TOTAL_LENGTH: 16,
} as const;

export const CARD_OWNER = {
  /**
   * 카드 소유자명을 검증하기 위한 규칙을 정합니다.
   *
   * - 소유자명은 영어 대소문자와 공백 문자(' ')만 허용하며, 첫 글자는 반드시 영어 대소문자여야 합니다.
   * - 소유자명은 최대 30글자까지 입력 가능합니다.
   */
  INPUT_FIELD_COUNT: 1,
  INVALID_CHARS_REGEX: /[^a-zA-Z ]/g,
  MAX_LENGTH: 30,
} as const;

export const CARD_GLOBAL_BRAND_PREFIX_PATTERNS = {
  /**
   * 카드 번호의 패턴에 따른 글로벌 카드사 식별 규칙을 정합니다.
   *
   * - VISA : 4로 시작하는 카드 번호
   * - Master Card : 51 ~ 55 사이의 숫자로 시작하는 카드 번호
   */
  VISA_PREFIX: 4,
  MASTER_CARD_PREFIX_MIN: 51,
  MASTER_CARD_PREFIX_MAX: 55,
} as const;

export const CARD_CVC = {
  /**
   * 카드 CVC 번호를 검증하기 위한 규칙을 정합니다.
   *
   * - 오직 0 ~ 9 사이의 숫자 입력만 허용합니다.
   * - 양수/음수 기호(+, -), 소수점 등의 입력을 허용하지 않기 위해 정규식으로 검증합니다.
   */
  INPUT_FIELD_COUNT: 1,
  INVALID_CHARS_REGEX: /[^0-9]/g,
  MAX_LENGTH: 3,
} as const;

export const CARD_BRANDS = {
  BC카드: {
    color: '#F04651',
  },
  신한카드: {
    color: '#0046FF',
  },
  카카오뱅크: {
    color: '#FFE600',
  },
  현대카드: {
    color: '#000000',
  },
  우리카드: {
    color: '#007BC8',
  },
  롯데카드: {
    color: '#ED1C24',
  },
  하나카드: {
    color: '#009490',
  },
  국민카드: {
    color: '#6A6056',
  },
} as const;
