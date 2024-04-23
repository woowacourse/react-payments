const PLACEHOLDER = {
  CARD_NUMBERS: "1234",
  EXPIRATION_MONTH: "MM",
  EXPIRATION_YEAR: "YY",
  OWNER_NAME: "JOHN DOE",
  CVC: "123",
};

const INPUT_LABEL = {
  CARD_NUMBERS: "카드 번호",
  EXPIRATION_DATE: "유효기간",
  OWNER_NAME: "소유자 이름",
  CVC: "CVC",
};

const INPUT_INFO_TITLE = {
  CARD_NUMBERS: "결제할 카드 번호를 입력해 주세요",
  EXPIRATION_DATE: "카드 유효기간을 입력해 주세요",
  OWNER_NAME: "카드 소유자 이름을 입력해 주세요",
  CARD_TYPE: "카드사를 선택해 주세요",
  CVC: "CVC 번호를 입력해 주세요",
};

const INPUT_INFO_SUBTITLE = {
  CARD_NUMBERS: "본인 명의의 카드만 결제 가능합니다.",
  EXPIRATION_DATE: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  CARD_TYPE: "현재 국내 카드사만 가능합니다.",
};

const EXPIRATION_DATE_PLACEHOLDER = [
  PLACEHOLDER.EXPIRATION_MONTH,
  PLACEHOLDER.EXPIRATION_YEAR,
];

export const MESSAGE = {
  PLACEHOLDER,
  INPUT_LABEL,
  INPUT_INFO_TITLE,
  INPUT_INFO_SUBTITLE,
  EXPIRATION_DATE_PLACEHOLDER,
};
