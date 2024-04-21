import Visa from '../imgs/Visa.png';
import Master from '../imgs/Mastercard.png';

export const CARD_BRAND = {
  visa: {
    startNumber: 4,
    logo: Visa,
  },
  master: {
    startNumber: 51,
    endNumber: 55,
    logo: Master,
  },
};

export const MASK_START_INDEX = 2;

export const SYMBOLS = {
  mask: '●',
  slash: '/',
};
