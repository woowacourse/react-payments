const IMG = {
  CVV: "/img/CVV.png",
} as const;

const TYPE = {
  PASSWORD: "password",
  TEXT: "text",
  BUTTON: "button",
  SUBMIT: "submit",
} as const;

const PLACE_HOLDER = {
  MM_YY: "MM/YY",
  OWNER_NAME_HINT: "카드에 표시된 이름과 동일하게 입력하세요.",
  NAME: "NAME",
  CARD_NAME_HINT: "카드 별명을 입력하세요.",
} as const;

const ID = {
  FIRST: "first",
  SECOND: "second",
} as const;

const NAVIGATE = {
  BACK: -1,
  HOME: "/",
  ADD_CARD_FORM: "/addCardForm",
  ADD_CARD_NAME: "/addCardName",
} as const;

const STRING = {
  DASH: "-",
  DOT: "•",
  SLASH: "/",
} as const;

const LENGTH = {
  ZERO: 0,
  PASSWORD: 1,
  DATE_BOUNDARY: 2,
  CVC: 3,
  DATE: 4,
  CARD_BOUNDARY: 8,
  CARD: 16,
};

const WARNING_TEXT = {
  ONLY_NUMBER: "숫자만 입력이 가능합니다.",
  DATE: "카드 유효기간은 MM/YY 형식이어야 합니다.",
  WRONG_MONTH: "잘못된 달을 입력했습니다. 유효한 달을 입력해주세요.",
  NO_COMPLETED_FORM: "작성이 완료되지 않은 필수 입력요소가 있습니다.",
};
export { IMG, TYPE, ID, NAVIGATE, PLACE_HOLDER, STRING, LENGTH, WARNING_TEXT };
