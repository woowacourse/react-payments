export const CARD_ISSUERS = [
  {
    "label": "BC카드",
    "value": "bc"
  },
  {
    "label": "신한카드",
    "value": "shinhan"
  },
  {
    "label": "카카오뱅크",
    "value": "kakao"
  },
  {
    "label": "현대카드",
    "value": "hyundai"
  },
  {
    "label": "우리카드",
    "value": "woori"
  },
  {
    "label": "롯데카드",
    "value": "lotte"
  },
  {
    "label": "하나카드",
    "value": "hana"
  },
  {
    "label": "국민카드",
    "value": "kookmin"
  }
] as const

export const CARD_NETWORK = {
  "VISA": {
    cardNumberLength: 16,
  },
  "MasterCard": {
    cardNumberLength: 16,
  },
  "Diners": {
    cardNumberLength: 14,
  },
  "AMEX": {
    cardNumberLength: 15,
  },
  "UnionPay": {
    cardNumberLength: 16,
  }
} as const