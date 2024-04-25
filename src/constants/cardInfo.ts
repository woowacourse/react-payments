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

// TODO: Map의 key를 CardIssuers로 바꾸기..
export const CARD_ISSUER_SELECTOR = new Map<string, CSSModuleClasses[string]>([
  ['BC카드', 'bc'],
  ['신한카드', 'shinhan'],
  ['카카오뱅크', 'kakao'],
  ['현대카드', 'hyundai'],
  ['우리카드', 'woori'],
  ['롯데카드', 'lotte'],
  ['하나카드', 'hana'],
  ['국민카드', 'kookmin'],
  ['', 'default'],
]);
