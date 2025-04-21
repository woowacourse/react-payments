export const CARD_TYPE = {
  VISA: {
    FIRST_DIGIT: '4',
  },
  MASTERCARD: {
    FIRST_DIGIT: '5',
    SECOND_DIGIT_MIN: 1,
    SECOND_DIGIT_MAX: 5,
  },
};

export const CARD_IMAGE_PATH = {
  VISA: './Visa.svg',
  MASTERCARD: './Mastercard.svg',
  DEFAULT: '',
};
