import { CardCompanyRecord } from './types';
import BC_CARD from './assets/bank/bc_card.png';
import SHINHAN_CARD from './assets/bank/shinhan_card.png';
import KAKAO_BANK from './assets/bank/kakao_bank.png';
import HYUNDAI_CARD from './assets/bank/hyundai_card.png';
import WOORI_CARD from './assets/bank/woori_card.png';
import LOTTE_CARD from './assets/bank/lotte_card.png';
import HANA_CARD from './assets/bank/hana_card.png';
import KB_CARD from './assets/bank/kb_card.png';

export const LOCAL_STORAGE_CARD_KEY = 'cardList';

export const PAGE_KIND = Object.freeze({
  home: 'homePage',
  addCard: 'addCardPage',
});

export const PAGE = [PAGE_KIND.home, PAGE_KIND.addCard] as const;

export const TAB_INDEX_INFO = {
  dismiss: 999,
  addCardPage: {
    firstCardNumber: 0,
    secondCardNumber: 1,
    thirdCardNumber: 2,
    fourthCardNumber: 3,
    month: 4,
    year: 5,
    owner: 6,
    cvc: 7,
    firstPassword: 8,
    secondPassword: 9,
  },
};

export const CARD_COMPANY_DATA: CardCompanyRecord = {
  default: {
    source: '',
    title: '',
    color: '#FFFFFF',
    backgroundColor: '#333333',
  },
  bc: {
    source: BC_CARD,
    title: 'BC카드',
    color: '#FFFFFF',
    backgroundColor: '#DE5356',
  },
  shinhan: {
    source: SHINHAN_CARD,
    title: '신한카드',
    color: '#FFFFFF',
    backgroundColor: '#1B45F5',
  },
  kakao: {
    source: KAKAO_BANK,
    title: '카카오뱅크',
    color: '#333333',
    backgroundColor: '#FBE74D',
  },
  hyundai: {
    source: HYUNDAI_CARD,
    title: '현대카드',
    color: '#FFFFFF',
    backgroundColor: '#000000',
  },
  woori: {
    source: WOORI_CARD,
    title: '우리카드',
    color: '#FFFFFF',
    backgroundColor: '#3579C2',
  },
  lotte: {
    source: LOTTE_CARD,
    title: '롯데카드',
    color: '#FFFFFF',
    backgroundColor: '#DA3832',
  },
  hana: {
    source: HANA_CARD,
    title: '하나카드',
    color: '#FFFFFF',
    backgroundColor: '#41928F',
  },
  kb: {
    source: KB_CARD,
    title: '국민카드',
    color: '#F7CF47',
    backgroundColor: '#6D655C',
  },
};
