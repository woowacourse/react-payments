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

export const CARD_COLOR: { [key: string]: string } = {
  기본: '#333333',
  BC카드: '#F04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
};
