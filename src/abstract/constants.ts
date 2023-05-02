import { CardCompany } from "../types/card";

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

const CARD_PASSWORD = {
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

const COMPANY_SRC: Record<(typeof COMPANY_LIST)[number], string> = {
  BC카드: "/img/bc-logo.svg",
  신한카드: "/img/shinhan-logo.svg",
  카카오뱅크: "/img/kakaobank-logo.svg",
  현대카드: "/img/hyundaicard-logo.svg",
  우리카드: "/img/worricard-logo.svg",
  롯데카드: "/img/lottecard-logo.svg",
  하나카드: "/img/hanacard-logo.svg",
  국민카드: "/img/kbcard-logo.svg",
};

const COMPANY_LIST = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
] as const;

const BACKGROUND: Record<CardCompany, string> = {
  없음: "#c0c0c2",
  BC카드: "#e03a5c",
  신한카드: "#090999",
  카카오뱅크: "#f2db02",
  현대카드: "#333333",
  우리카드: "#0099e0",
  롯데카드: "#ba0000",
  하나카드: "#008B8B",
  국민카드: "#696969",
} as const;

const DEFAULT_COMPANY = "없음" as const;

export {
  IMG,
  TYPE,
  CARD_PASSWORD,
  NAVIGATE,
  PLACE_HOLDER,
  STRING,
  LENGTH,
  WARNING_TEXT,
  COMPANY_SRC,
  COMPANY_LIST,
  BACKGROUND,
  DEFAULT_COMPANY,
};
