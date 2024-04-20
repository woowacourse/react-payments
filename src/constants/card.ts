import IMAGES from '../assets/images';

export const CARD_NUMBERS = {
  length: 4,
  startNumber: 0,
  endNumber: 9,
};

export const CARD_EXPIRATION = {
  length: 2,
};

export const CARD_USER = {
  length: 100,
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
