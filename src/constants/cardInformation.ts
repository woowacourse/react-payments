export const CARD_INFO = {
  NUMBER_LENGTH: 4,
  DATE_LENGTH: 2,
  NAME_LENGTH: 15,
  MONTH_START: 1,
  MONTH_END: 12,
  VALID_YEAR: 24,
  CVC_LENGTH: 3,
  PASSWORD_LENGTH: 2,
};

export const OWNER_NAME_REG = /^[A-Z\s]*$/; // 영문자 대문자 또는 공백만 허용

export const CARD_BRAND = {
  VISA: 4,
  MASTER_START: 51,
  MASTER_END: 55,
};

export const CARD_COMPANIES = {
  BC_CARD: { name: "BC카드", color: "rgba(240, 70, 81, 1)" },
  SHINHAN_CARD: { name: "신한카드", color: "rgba(0, 70, 255, 1)" },
  KAKAOBANK_CARD: { name: "카카오뱅크", color: "rgba(255, 230, 0, 1)" },
  HYUNDAIC_CARD: { name: "현대카드", color: "rgba(0, 0, 0, 1)" },
  WOORI_CARD: { name: "우리카드", color: "rgba(0, 123, 200, 1)" },
  LOTTE_CARD: { name: "롯데카드", color: "rgba(237, 28, 36, 1)" },
  HANA_CARD: { name: "하나카드", color: "rgba(0, 148, 144, 1)" },
  KOOKMIN_CARD: { name: "국민카드", color: "rgba(106, 96, 86, 1)" },
};
