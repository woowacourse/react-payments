export const CARD_STEPS = {
  CARD_NUMBERS: '카드 번호',
  CARD_BRAND: '카드 브랜드',
  CARD_EXPIRATION_DATE: '카드 유효기간',
  CARD_CVC_NUMBER: '카드 CVC',
  CARD_PASSWORD: '카드 비밀번호',
} as const;

export const CARD_STEP = Object.values(CARD_STEPS);
