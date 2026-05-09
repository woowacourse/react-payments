export const CARD_BRAND = { VISA: 'VISA', MASTER_CARD: 'MASTER' } as const;

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
