import BC_CARD from '../assets/bank/bc_card.png';
import HANA_CARD from '../assets/bank/hana_card.png';
import HYUNDAI_CARD from '../assets/bank/hyundai_card.png';
import KAKAO_BANK from '../assets/bank/kakao_bank.png';
import KB_CARD from '../assets/bank/kb_card.png';
import LOTTE_CARD from '../assets/bank/lotte_card.png';
import SHINHAN_CARD from '../assets/bank/shinhan_card.png';
import WOORI_CARD from '../assets/bank/woori_card.png';
import { CardCompanyRecord } from '../types/types';

export const LOCAL_STORAGE_CARD_KEY = 'cardList';

export const PAGE_KIND = Object.freeze({
  HOME: 'homePage',
  ADD_CARD: 'addCardPage',
});

export const PAGE = [PAGE_KIND.HOME, PAGE_KIND.ADD_CARD] as const;

export const Z_INDEX_INFO = {
  MODAL: 1,
};

export const TAB_INDEX_INFO = {
  DISMISS: 999,
  ADD_CARD_PAGE: {
    FIRST_CARD_NUMBER: 0,
    SECOND_CARD_NUMBER: 1,
    THIRD_CARD_NUMBER: 2,
    FOURTH_CARD_NUMBER: 3,
    MONTH: 4,
    YEAR: 5,
    OWNER: 6,
    CVC: 7,
    FIRST_PASSWORD: 8,
    SECOND_PASSWORD: 9,
    SUBMIT: 10,
  },
};

export const CARD_COMPANY_KIND = [
  'bc',
  'shinhan',
  'kakao',
  'hyundai',
  'woori',
  'lotte',
  'hana',
  'kb',
] as const;

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
