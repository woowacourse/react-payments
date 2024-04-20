interface CardBrand {
  NAME: string;
  MIN_NUMBER: number;
  MAX_NUMBER: number;
}

export const CARD_CONSTRAINTS = {
  CARD_NUMBERS: {
    LENGTH: 4,
  },
  CARD_EXPIRATION: {
    LENGTH: 2,
    MIN_MONTH: 12,
    MAX_MONTH: 12,
  },
};

export const FORM_FIELDS = {
  CARD_NUMBERS: {
    MAIN_TEXT: "결제할 카드 번호를 입력해 주세요",
    SUB_TEXT: "본인 명의의 카드만 결제 가능합니다.",
    LABEL: "카드 번호",
    PLACEHOLDER: "1234",
    MAX_LENGTH: 4,
  },

  CARD_EXPIRATION: {
    MAIN_TEXT: "카드 유효기간을 입력해 주세요",
    SUB_TEXT: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    LABEL: "유효 기간",
    PLACEHOLDER: { MONTH: "MM", YEAR: "YY" },
    MAX_LENGTH: 2,
  },

  USER_NAME: {
    MAIN_TEXT: "카드 소유자 이름을 입력해 주세요",
    SUB_TEXT: "",
    LABEL: "소유자 이름",
    PLACEHOLDER: "JOHN DOE",
    MAX_LENGTH: 21,
  },
};

export const MASKING = "•";

export const CARD_BRAND: { [key: string]: CardBrand } = {
  MASTERCARD: {
    NAME: "MasterCard",
    MIN_NUMBER: 51,
    MAX_NUMBER: 55,
  },
  VISA: {
    NAME: "Visa",
    MIN_NUMBER: 40,
    MAX_NUMBER: 49,
  },
};
