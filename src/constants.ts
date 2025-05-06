export const INITIAL_CARD_NUMBER = {
  first: { value: '', errorMessage: '' },
  second: { value: '', errorMessage: '' },
  third: { value: '', errorMessage: '' },
  fourth: { value: '', errorMessage: '' }
};

export const INITIAL_EXPIRATION = { year: { value: '', errorMessage: '' }, month: { value: '', errorMessage: '' } };

export const INITIAL_CVC = { value: '', errorMessage: '' };

export const INITIAL_PASSWORD = { value: '', errorMessage: '' };
export const CARD_COMPANY = ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'] as const;

export const CARD_BRANDS = {
  VISA: {
    name: 'VISA',
    logo: '/images/visa.jpg',
    match: (value: string) => value.startsWith('4')
  },
  MASTERCARD: {
    name: 'MASTERCARD',
    logo: '/images/mastercard.jpg',
    match: (value: string) => {
      const prefix = Number(value.slice(0, 2));
      return prefix >= 51 && prefix <= 55;
    }
  }
} as const;

export const STEPS = ['카드번호', '카드사', '유효기간', 'CVC', '비밀번호'] as const;

export const FIELD_LENGTH = {
  cardNumber: 4,
  expiration: 2,
  cvc: 3,
  password: 2
} as const;
