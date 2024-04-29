export enum CardIssuer {
  BcCard = "bc-card",
  ShinhanCard = "shinhan-card",
  KakaoBankCard = "kakaobank-card",
  HyundaiCard = "hyundai-card",
  WooriCard = "woori-card",
  LotteCard = "lotte-card",
  HanaCard = "hana-card",
  KbCard = "kb-card",
}

export const CARD_ISSUERS = Object.values(CardIssuer);

export const isCardIssuer = (value: string): value is CardIssuer => {
  return (CARD_ISSUERS as readonly string[]).includes(value);
};

export const cardIssuerMapper: Record<
  CardIssuer,
  { label: string; color: string; text: string }
> = {
  "bc-card": { label: "BC카드", color: "rgba(240, 70, 81, 1)", text: "BC카드" },
  "shinhan-card": {
    label: "신한카드",
    color: "rgba(0, 70, 255, 1)",
    text: "신한카드",
  },
  "kakaobank-card": {
    label: "카카오뱅크",
    color: "rgba(255, 230, 0, 1)",
    text: "카카오뱅크카드",
  },
  "hyundai-card": {
    label: "현대카드",
    color: "rgba(0, 0, 0, 1)",
    text: "현대카드",
  },
  "woori-card": {
    label: "우리카드",
    color: "rgba(0, 123, 200, 1)",
    text: "우리카드",
  },
  "lotte-card": {
    label: "롯데카드",
    color: "rgba(237, 28, 36, 1)",
    text: "롯데카드",
  },
  "hana-card": {
    label: "하나카드",
    color: "rgba(0, 148, 144, 1)",
    text: "하나카드",
  },
  "kb-card": {
    label: "국민카드",
    color: "rgba(106, 96, 86, 1)",
    text: "국민카드",
  },
};
