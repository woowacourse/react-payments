export const CARD_NUMBER = {
  MAX_LENGTH: 4,
} as const;

export const EXPIRATION_DATE = {
  MAX_LENGTH: 2,
} as const;

export const SECURITY_CODE = {
  MAX_LENGTH: 3,
} as const;

export const OWNER_NAME = {
  MAX_LENGTH: 30,
} as const;

export const PASSWORD = {
  MAX_LENGTH: 1,
} as const;

export const COLOR = {
  DEFAULT: '#E5E5E5',
  WHITE: '#FFFFFF',
  BLACK: 'black',
  GREY100: '#ECEBF1',
  GREY200: '#333333',
  GOLD: '#CBBA64',
  RED: '#F04651',
  BLUE: '#0080FF',
} as const;
