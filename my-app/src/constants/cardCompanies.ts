export type CardCompany = {
  name: string;
  color: string;
};

export const CARD_COMPANIES: CardCompany[] = [
  { name: "BC카드", color: "#F04651" },
  { name: "신한카드", color: "#0046FF" },
  { name: "카카오뱅크", color: "#FFE600" },
  { name: "현대카드", color: "#000000" },
  { name: "우리카드", color: "#007BC8" },
  { name: "롯데카드", color: "#ED1C24" },
  { name: "하나카드", color: "#009490" },
  { name: "국민카드", color: "#6A6056" },
];

const COMPANY_COLOR_MAP = new Map(CARD_COMPANIES.map((c) => [c.name, c.color]));

export const decideCardColor = (company: string) => {
  return COMPANY_COLOR_MAP.get(company) ?? "#333333";
};
