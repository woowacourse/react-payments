export const ERRORS = {
  isNotInteger: "숫자만 입력 가능합니다.",
  isNotFourDigit: "4자리 숫자를 입력해 주세요.",
  isNotTwoDigit: "2자리 숫자를 입력해주세요",
  inValidMonth: "1에서 12사이의 숫자를 입력해주세요",
  deprecatedCard: "만료된 카드는 사용할 수 없습니다.",
  isNotAlphabet: "알파벳만 입력 가능합니다.",
} as const;

const CARD_NUMBER = {
  title: "결제할 카드 번호를 입력해 주세요",
  description: "본인 명의의 카드만 결제 가능합니다.",
  labelText: "카드 번호",

  placeholder: "1234",
} as const;

const EXPIRATION_DATE = {
  title: "카드 유효기간을 입력해 주세요",
  description: "월/년도(MMYY)를 순서대로 입력해 주세요",
  labelText: "유효기간",

  placeholder: {
    month: "MM",
    year: "YY",
  },
} as const;

const OWNER_NAME = {
  title: "카드 소유자 이름을 입력해 주세요",
  labelText: "소유자 이름",

  placeholder: "JOHN DOE",
} as const;

export const ADD_CARD_FORM_FIELDS = {
  CARD_NUMBER,
  EXPIRATION_DATE,
  OWNER_NAME,
} as const;
