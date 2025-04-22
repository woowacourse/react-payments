export const INITIAL_CARD_NUMBER = {
  first: { value: '', isError: false },
  second: { value: '', isError: false },
  third: { value: '', isError: false },
  fourth: { value: '', isError: false }
} as const;

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

export const INITIAL_EXPIRATION = { year: { value: '', errorMessage: '' }, month: { value: '', errorMessage: '' } } as const;

export const INITIAL_CVC = { value: '', errorMessage: '' };
