export const MASTER_CARD_PREFIXES = ['51', '52', '53', '54', '55'];

export const VISA_CARD_PREFIXES = ['4'];

export const CARD_TYPE_PATH: Record<CardType, string> = {
  VISA: './assets/Visa.png',
  MasterCard: './assets/Mastercard.png',
  None: '',
};

export const CARD_INFO_LENGTH = {
  NUMBER: 4,
  EXPIRATION: 2,
  CVC: 3,
};
