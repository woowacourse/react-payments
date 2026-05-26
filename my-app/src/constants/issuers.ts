export const ISSUERS = {
  "31": { label: "BC카드", color: "#F04651" },
  "41": { label: "신한카드", color: "#0046FF" },
  "15": { label: "카카오뱅크", color: "#FFE600" },
  "61": { label: "현대카드", color: "#000000" },
  "W1": { label: "우리카드", color: "#007BC8" },
  "71": { label: "롯데카드", color: "#ED1C24" },
  "21": { label: "하나카드", color: "#009490" },
  "11": { label: "국민카드", color: "#6A6056" },
} as const;

export const DEFAULT_CARD_COLOR = "#333333";
export type IssuerCode = keyof typeof ISSUERS;

export const isIssuerCode = (value: string): value is IssuerCode => {
  return Object.prototype.hasOwnProperty.call(ISSUERS, value);
};
