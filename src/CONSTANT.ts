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

export const EXPLANATION_MESSAGE = {
  CARD_FORM_PAGE: "카드추가",
  CARD_LIST_PAGE: "보유카드",
  CARD_NICK_PAGE: "카드추가",

  INPUT_CARD_NUMBER: "카드번호",
  INPUT_EXPIRATION_DATE: "만료일",
  INPUT_OWNER: "카드 소유자 이름(선택)",
  INPUT_PASSWORD: "카드 비밀번호",
  INPUT_SECURITY_CODE: "보안 코드(CVC/CVV)",

  REGISTER_CARD: "카드를 등록 중입니다.",
  REGISTER_CARD_WAIT: "잠시만 기다려주세요.",
  BE_REGISTERED_CARD: "카드 등록이 완료되었습니다",

  NEXT_PAGE_BUTTON: "다음",
  END_BUTTON: "확인",
};

export const PLACE_HOLDER = {
  CARD_NUMBER: "XXXX",
  EXPIRATION_DATE: "MM/YY",
  OWNER: "카드에 표시된 이름과 동일하게 입력하세요.",
  NICK: "카드 별명을 10자 이내로 입력해주세요.",
  PREVIEW_OWNER: "NAME",
};

export const DIRECTION_MESSAGE = {
  SECURITY_CODE: "cvc/cvv번호는 카드 뒷면에 기재되어 있는 숫자 3자리입니다",
  EMPTY_CARD_LIST: "새로운 카드를 등록해주세요.",
};

export const ARIA_LABEL_MESSAGE = {
  BACK_PAGE: "이전 페이지로 돌아가기",
  END_PAGE: "현재 페이지 완료",
  GO_ADD_CARD_FORM: "카드 추가를 위한 입력 폼으로 가기",
  SECURITY_CODE_GUIDE_BUTTON: "보안코드 입력 가이드",
  COMPARE_NOW_LENGTH_AND_LIMIT: "현재 글자수와 제한 글자수 비교",
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

export const LOADING_TIME = 3000;

export const INPUT_LENGTH_LIMIT = {
  MAX_EACH_CARD_NUMBER: 4,
  MAX_EXPIRATION_DATE: 5,
  MAX_OWNER: 30,
  MAX_SHOW_OWNER: 15,
  MAX_EACH_PASSWORD: 1,
  MAX_SECURITY_CODE: 3,
  MAX_NICK: 10,
};
