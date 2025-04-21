export const MASTER_CARD_PREFIXES = ['51', '52', '53', '54', '55'];

export const VISA_CARD_PREFIXES = ['4'];

export const CARD_COMPANY_NAMES = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;

export const CARD_COMPANY_COLORS: Record<(typeof CARD_COMPANY_NAMES)[number], string> = {
  BC카드: '#F04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
};

export const CARD_TYPE_PATH: Record<CardType, string> = {
  VISA: './assets/Visa.png',
  MasterCard: './assets/Mastercard.png',
  None: '',
};

export const CARD_INFO_LENGTH = {
  NUMBER: 4,
  EXPIRATION: 2,
  CVC: 3,
  PASSWORD_FRONT: 2,
};
