import IMAGES from '../assets/images';

export const INPUT_LENGTH = {
  CARD_NUMBERS: 4,
  CARD_EXPIRATION: 2,
  CARD_USER: 100,
};

export const CARD_MARK = {
  visa: {
    src: IMAGES.visaCard,
    alt: 'visa card',
  },
  master: {
    src: IMAGES.masterCard,
    alt: 'master card',
  },
  etc: {
    src: IMAGES.etcCard,
    alt: 'etc card',
  },
};

export const CARD_COLOR = {
  default: '#333333',
};
