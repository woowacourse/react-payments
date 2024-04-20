import EtcImg from '../assets/images/etc.png';
import MasterCardImg from '../assets/images/mastercard.jpg';
import VisaImg from '../assets/images/visa.jpg';

export const CARD_NUMBERS = {
  length: 4,
  startNumber: 0,
  endNumber: 9,
};

export const CARD_EXPIRATION = {
  length: 2,
};

export const CARD_USER = {
  length: {
    max: 100,
    min: 1,
  },
};

export const CARD_MARK = {
  visa: {
    src: VisaImg,
    alt: 'visa card',
    startNumber: 4,
  },
  master: {
    src: MasterCardImg,
    alt: 'master card',
    startNumber: 5,
    rangeOfSecondNumber: {
      start: 1,
      end: 4,
    },
  },
  etc: {
    src: EtcImg,
    alt: 'etc card',
  },
};

export const CARD_COLOR = {
  default: '#333333',
};
