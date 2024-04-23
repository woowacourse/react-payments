import EtcImg from '../assets/images/etc.png';
import MasterCardImg from '../assets/images/mastercard.jpg';
import VisaImg from '../assets/images/visa.jpg';

export const CARD_FORM_STEP = {
  password: 6,
  cvc: 5,
  userName: 4,
  period: 3,
  company: 2,
  numbers: 1,
};

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

export const CARD_CVC = {
  length: 3,
};

export const CARD_COLOR_ETC = '#6a0680';
export const CARD_BACK_SIDE_COLOR = '#D5D5D5';

export const CARD_COMPANY: Map<string, { name: string; color: string }> =
  new Map([
    [
      'bc',
      {
        name: 'BC카드',
        color: '#F04651',
      },
    ],
    [
      'sinhan',
      {
        name: '신한카드',
        color: '#0046FF',
      },
    ],
    [
      'kakao',
      {
        name: '카카오뱅크',
        color: '#FFE600',
      },
    ],
    [
      'hyundai',
      {
        name: '현대카드',
        color: '#000000',
      },
    ],
    [
      'wori',
      {
        name: '우리카드',
        color: '#007BC8',
      },
    ],
    [
      'lotte',
      {
        name: '롯데카드',
        color: '#ED1C24',
      },
    ],
    [
      'hana',
      {
        name: '하나카드',
        color: '#009490',
      },
    ],
    [
      'kb',
      {
        name: '국민카드',
        color: '#6A6056',
      },
    ],
    [
      'etc',
      {
        name: '기타',
        color: CARD_COLOR_ETC,
      },
    ],
  ]);

export const CARD_COMPANY_NAMES = Array.from(CARD_COMPANY.keys());

export const CARD_PASSWORD = {
  length: 2,
};
