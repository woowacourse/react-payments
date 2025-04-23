export const CARD_TYPE = {
  visa: 'visa',
  master: 'master',
  none: 'none',
};
export type CardType = keyof typeof CARD_TYPE;

export const CARD_BANK = {
  bc: { label: 'BC카드', color: '#F04651' },
  shinhan: { label: '신한카드', color: '#0046FF' },
  kakao: { label: '카카오뱅크', color: '#FFE600' },
  hyundai: { label: '현대카드', color: '#000000' },
  woori: { label: '우리카드', color: '#007BC8' },
  lotte: { label: '롯데카드', color: '#ED1C24' },
  hana: { label: '하나카드', color: '#009490' },
  kookmin: { label: '국민카드', color: '#6A6056' },
};
export type CardBankType = keyof typeof CARD_BANK;

export const CARD_NUMBER = {
  length: {
    min: 0,
    max: 4,
    prefix: 2,
  },
};

export const EXPIRATION_DATE = {
  length: 2,
  padLeftThreshold: 1,
  month: {
    min: 1,
    max: 12,
  },
};

export const CVC = {
  length: { min: 0, max: 3 },
};

export const CARD_PASSWORD = {
  length: { min: 0, max: 2 },
};
