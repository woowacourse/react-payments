export const CARD_NUMBER = {
  maxLength: 4,
  fieldCount: 4,
};

export const CARD_EXPIRATION = {
  minMonth: 1,
  maxMonth: 12,
  minYear: 25,
  monthLength: 2,
  yearLength: 2,
  maxLength: 2,
};

export const CARD_CVC = {
  maxLength: 3,
};

export const CARD_PASSWORD = {
  maxLength: 2,
};

export const CARD_TYPE = {
  visa: {
    startsWith: '4',
  },
  masterCard: {
    startsWith: ['51', '52', '53', '54', '55'],
  },
};

export const CARD_BRAND_COLOR = {
  BC카드: '#F04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
}
