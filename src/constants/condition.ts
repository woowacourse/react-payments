export const INPUT_COUNTS = {
  CARD_NUMBERS: 4,
  EXPIRATION_DATE: 2,
  OWNER_NAME: 1,
  CVC: 1,
  PASSWORD: 1,
};

export const PLACE_HOLDER = {
  CARD_NUMBERS: "1234",
  EXPIRATION_MONTH: "MM",
  EXPIRATION_YEAR: "YY",
  OWNER_NAME: "JOHN DOE",
};

export const INPUT_LABEL = {
  CARD_NUMBERS: "카드 번호",
  EXPIRATION_DATE: "유효기간",
  OWNER_NAME: "소유자 이름",
};

export const INPUT_INFO_TITLE = {
  CARD_NUMBERS: "결제할 카드 번호를 입력해 주세요",
  EXPIRATION_DATE: "카드 유효기간을 입력해 주세요",
  OWNER_NAME: "카드 소유자 이름을 입력해 주세요",
  CARD_COMPANY: "카드사를 선택해 주세요",
  CVC: "CVC 번호를 입력해 주세요",
  PASSWORD: "비밀번호를 입력해 주세요",
};

export const INPUT_INFO_SUBTITLE = {
  CARD_NUMBERS: "본인 명의의 카드만 결제 가능합니다.",
  EXPIRATION_DATE: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  CARD_COMPANY: "현재 국내 카드사만 가능합니다.",
  PASSWORD: "앞의 2자리를 입력해주세요",
};

export const CARD_BRAND_INFO = {
  VISA: {
    START_NUMBER: 4,
  },
  MASTER: {
    START_NUMBER: 51,
    END_NUMBER: 55,
  },
};

export const companyColor = {
  BC카드: "#F04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: "#6A6056",
} as const;
export const companyNames = Object.keys(companyColor);
export type Company = keyof typeof companyColor;
