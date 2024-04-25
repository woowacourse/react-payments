export const ERROR_MESSAGE = {
  INVALID_EXPIRATION_MONTH_LENGTH: '유효 기간의 월은 01 ~ 12 사이의 두 자리 숫자여야 합니다.',
  INVALID_EXPIRATION_YEAR_LENGTH: '유효 기간의 년도는 두 자리 숫자여야 합니다.',
  INVALID_EXPIRATION_DATE_EXPIRED: '유효 기간이 만료되었습니다. 확인 후 다시 입력해주세요.',
  INVALID_CARD_NUMBER_LENGTH: '카드 번호는 4자리 숫자여야 합니다.',
  INVALID_CARD_OWNER_CHARACTER: '소유자 이름은 영어 대소문자로 구성되어야 합니다.',
  INVALID_CARD_OWNER_LENGTH: '소유자 이름은 30자 이하여야 합니다.',
  INVALID_CARD_BRAND: '지원하지 않는 카드사입니다. 다른 카드를 선택해주세요.',
  INVALID_CVC: 'CVC 번호는 3자리 숫자로 입력하셔야 합니다.',
} as const;
