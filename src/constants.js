// TODO : 페이지 단위로 상수화
export const HEADER_TEXT = Object.freeze({
  OWNED_CARD: "보유카드",
  ADD_CARD: "카드추가",
});

export const INPUT_LABEL_TEXT = Object.freeze({
  CARD_NUMBER: "카드번호",
  CARD_EXPIRATION: "만료일",
  CARD_OWNER: "카드 소유자 이름(선택)",
  CARD_CVC: "보안코드(CVC/CVV)",
  CARD_PASSWORD: "카드 비밀번호",
});

export const LABEL_TEXT = Object.freeze({
  CARD_ADD_COMPLETE: "카드등록이 완료되었습니다.",
});

export const BUTTON_TEXT = Object.freeze({
  NEXT: "다음",
});

export const PAGE_PATH = Object.freeze({
  ROOT: "/",
  ADD: "/add",
  COMPLETE: "/complete",
});

export const CARD_INPUT = Object.freeze({
  OWNER_NAME_LENGTH_LIMIT: 30,
  OWNER_PLACEHOLDER: "카드에 표시된 이름과 동일하게 입력하세요.",
  CARD_NUMBER_PLACEHOLDER: "0000",
  EXPIRATION_MONTH_PLACEHOLDER: "MM",
  EXPIRATION_YEAR_PLACEHOLDER: "YY",
  CARD_NUMBER_TEXT_LENGTH: 4,
  CARD_CVC_TEXT_LENGTH: 3,
  CARD_EXPIRATION_TEXT_LENGTH: 2,
  CARD_PASSWORD_LIST_LENGTH: 2,
});

export const ANIMATION = Object.freeze({
  RIGHT_IN: "right-in",
  LEFT_OUT: "left-out",
});

export const STATE_KEY = Object.freeze({
  CARD_COMPANY: "cardCompany",
  CARD_NUMBER: "cardNumber",
  FIRST_CARD_NUMBER: "firstCardNumber",
  SECOND_CARD_NUMBER: "secondCardNumber",
  THIRD_CARD_NUMBER: "thirdCardNumber",
  FOURTH_CARD_NUMBER: "fourthCardNumber",
  CARD_OWNER: "cardOwner",
  CARD_EXPIRATION: "cardExpiration",
  CARD_NICK_NAME: "cardNickName",
  CARD_CVC: "cardCVC",
  CARD_PASSWORD: "cardPassword",
  EXPIRATION_MONTH: "expirationMonth",
  EXPIRATION_YEAR: "expirationYear",
  CARD_LIST: "cardList",
});
