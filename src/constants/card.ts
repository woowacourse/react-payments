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
  length: 100,
};

export const CARD_MARK = {
  visa: {
    src: VisaImg,
    alt: 'visa card',
  },
  master: {
    src: MasterCardImg,
    alt: 'master card',
  },
  etc: {
    src: EtcImg,
    alt: 'etc card',
  },
};
