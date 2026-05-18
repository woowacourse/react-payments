export const CARD_COMPANIES = [
  {
    issuerCode: "31",
    name: "BC카드",
    color: "#F04651",
  },
  {
    issuerCode: "41",
    name: "신한카드",
    color: "#0046FF",
  },
  {
    issuerCode: "15",
    name: "카카오뱅크",
    color: "#FFE600",
  },
  {
    issuerCode: "61",
    name: "현대카드",
    color: "#000000",
  },
  {
    issuerCode: "W1",
    name: "우리카드",
    color: "#007BC8",
  },
  {
    issuerCode: "71",
    name: "롯데카드",
    color: "#ED1C24",
  },
  {
    issuerCode: "21",
    name: "하나카드",
    color: "#009490",
  },
  {
    issuerCode: "11",
    name: "국민카드",
    color: "#6A6056",
  },
] as const;

export type CardCompany = (typeof CARD_COMPANIES)[number];
