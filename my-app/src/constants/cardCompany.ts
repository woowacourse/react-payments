export const CARD_COMPANIES = {
  bc: { label: "BC카드", color: "#F04651" },
  shinhan: { label: "신한카드", color: "#0046FF" },
  kakaobank: { label: "카카오뱅크", color: "#FFE600" },
  hyundai: { label: "현대카드", color: "#000000" },
  woori: { label: "우리카드", color: "#007BC8" },
  lotte: { label: "롯데카드", color: "#ED1C24" },
  hana: { label: "하나카드", color: "#009490" },
  kookmin: { label: "국민카드", color: "#6A6056" },
} as const;

export const DEFAULT_CARD_COLOR = "#333333";

export type CardCompany = keyof typeof CARD_COMPANIES;

export const isCardCompany = (value: string): value is CardCompany => {
  return Object.prototype.hasOwnProperty.call(CARD_COMPANIES, value);
};
