export const CARD_ISSUERS = [
  "bc-card",
  "shinhan-card",
  "kakaobank-card",
  "hyundai-card",
  "woori-card",
  "lotte-card",
  "hana-card",
  "kb-card",
] as const;

export type CardIssuer = (typeof CARD_ISSUERS)[number];

export const isCardIssuer = (value: string): value is CardIssuer => {
  return (CARD_ISSUERS as readonly string[]).includes(value);
};

export const cardIssuerMapper: Record<
  CardIssuer,
  { label: string; color: string }
> = {
  "bc-card": { label: "BC카드", color: "rgba(240, 70, 81, 1)" },
  "shinhan-card": { label: "신한카드", color: "rgba(0, 70, 255, 1)" },
  "kakaobank-card": { label: "카카오뱅크", color: "rgba(255, 230, 0, 1)" },
  "hyundai-card": { label: "현대카드", color: "rgba(0, 0, 0, 1)" },
  "woori-card": { label: "우리카드", color: "rgba(0, 123, 200, 1)" },
  "lotte-card": { label: "롯데카드", color: "rgba(237, 28, 36, 1)" },
  "hana-card": { label: "하나카드", color: "rgba(0, 148, 144, 1)" },
  "kb-card": { label: "국민카드", color: "rgba(106, 96, 86, 1)" },
};
