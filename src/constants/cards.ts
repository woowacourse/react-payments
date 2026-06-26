export const CARD_ISSUER_CONFIG = {
  BC: {
    name: 'BC카드',
    issuerCode: '31',
    color: '#F04651',
  },
  SHINHAN: {
    name: '신한카드',
    issuerCode: '41',
    color: '#0046FF',
  },
  KAKAOBANK: {
    name: '카카오뱅크',
    issuerCode: '15',
    color: '#FFE600',
  },
  HYUNDAI: {
    name: '현대카드',
    issuerCode: '61',
    color: '#000000',
  },
  WOORI: {
    name: '우리카드',
    issuerCode: 'W1',
    color: '#007BC8',
  },
  LOTTE: {
    name: '롯데카드',
    issuerCode: '71',
    color: '#ED1C24',
  },
  HANA: {
    name: '하나카드',
    issuerCode: '21',
    color: '#009490',
  },
  KOOKMIN: {
    name: '국민카드',
    issuerCode: '11',
    color: '#6A6056',
  },
} as const;

export const CARD_BRAND = {
  VISA: 'VISA',
  MASTER_CARD: 'MASTER',
  DINERS: 'DINERS',
  AMEX: 'AMEX',
  UNION_PAY: 'UNION_PAY',
  LOCAL: 'LOCAL',
} as const;

export const BRAND_ICON_MAP: Record<string, string> = {
  VISA: `${import.meta.env.BASE_URL}visa.svg`,
  MASTER: `${import.meta.env.BASE_URL}mastercard.svg`,
  DINERS: `${import.meta.env.BASE_URL}diners.svg`,
  AMEX: `${import.meta.env.BASE_URL}amex.svg`,
  UNION_PAY: `${import.meta.env.BASE_URL}union-pay.svg`,
  LOCAL: '',
};

export const CARD_BRAND_RULE = [
  {
    name: CARD_BRAND['VISA'],
    prefixPattern: /^4/,
    pattern: /^4\d{15}$/,
  },
  {
    name: CARD_BRAND['MASTER_CARD'],
    prefixPattern: /^5[1-5]/,
    pattern: /^5[1-5]\d{14}$/,
  },
  {
    name: CARD_BRAND['DINERS'],
    prefixPattern: /^36/,
    pattern: /^36\d{12}$/,
  },
  {
    name: CARD_BRAND['AMEX'],
    prefixPattern: /^3[47]/,
    pattern: /^3[47]\d{13}$/,
  },
  {
    name: CARD_BRAND['UNION_PAY'],
    prefixPattern: /^(622[2-8]|6221[3-9]|62212[6-9]|6229[01]|62292[0-5]|62[4-6]|628[2-8])/,
    pattern:
      /^(622(1(2[6-9]|[3-9]\d)|[2-8]\d\d|9([01]\d|2[0-5]))\d{10}|62[4-6]\d{13}|628[2-8]\d{12})$/,
  },
];
