export const CARD_BRAND = { VISA: 'VISA', MASTER_CARD: 'MASTER' } as const;
export const CARD_ISSUER_CONFIG = {
  BC: {
    name: 'BC카드',
    color: '#F04651',
  },
  SHINHAN: {
    name: '신한카드',
    color: '#0046FF',
  },
  KAKAO: {
    name: '카카오뱅크',
    color: '#FFE600',
  },
  HYUNDAI: {
    name: '현대카드',
    color: '#000000',
  },
  WOORI: {
    name: '우리카드',
    color: '#007BC8',
  },
  LOTTE: {
    name: '롯데카드',
    color: '#ED1C24',
  },
  HANA: {
    name: '하나카드',
    color: '#009490',
  },
  KB: {
    name: '국민카드',
    color: '#6A6056',
  },
} as const;

export const BRAND_ICON_MAP: Record<string, string> = {
  VISA: `${import.meta.env.BASE_URL}visa.svg`,
  MASTER: `${import.meta.env.BASE_URL}mastercard.svg`,
  NONE: '',
};

export const CARD_BRAND_RULE = {
  VISA: {
    PREFIX: '4',
  },
  MASTER_CARD: {
    PREFIX_MIN: 51,
    PREFIX_MAX: 55,
    PREFIX_LENGTH: 2,
  },
} as const;
