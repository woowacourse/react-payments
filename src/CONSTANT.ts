export const CARD_ERROR_MESSAGE = {
  INPUT_CARD_NUMBER: "각 숫자 4자리씩 입력해주세요",
  INPUT_CARD_EXPIRATION_DATE:
    "현재 월 기준 5년 이내의 만료일만 입력 가능합니다",
  INPUT_CARD_OWNER: "영문 이름을 입력해주세요",
  INPUT_CARD_SECURITY: "3자리 숫자를 입력해주세요",
  INPUT_CARD_PASSWORD: "카드 비밀번호 앞 두 자리 숫자를 입력해주세요",
};

export const INPUT_STATUS = {
  ERROR: 0,
  NOT_COMPLETE: 1,
  COMPLETE: 2,
};

export const GUIDE_MESSAGE = {
  SECURITY_CODE: "cvc/cvv번호는 카드 뒷면에 기재되어 있는 숫자 3자리입니다",
};

export const REGULAR_EXPRESSION = {
  ONE_NUMBER: /^\d{1}$/,
  SPACE_OVER_TWO: /\s{2,}/,
  CAPITAL_LETTER_OR_SPACE: /^[A-Z\s]+$/,
};

export const CARD_CO_NAME = {
  woori: "우리카드",
  lotte: "롯데카드",
  hana: "하나카드",
  kb: "국민카드",
  kakao: "카카오뱅크",
  bc: "BC카드",
  shinhan: "신한카드",
  hyundai: "현대카드",
};
