import { COMPANY_NAME } from 'components/common/Card/types';

export const COMPANY_LIST: Record<string, COMPANY_NAME> = {
  bc_card: 'BC카드',
  sh_card: '신한카드',
  kakao_bank: '카카오뱅크',
  hd_card: '현대카드',
  wr_card: '우리카드',
  lt_card: '롯데카드',
  hn_card: '하나카드',
  kb_card: '국민카드',
};

export const CARDS_INFO = [
  {
    name: COMPANY_LIST.bc_card,
    iconSvgPath: '/assets/bc_card.svg',
    color: '#F04652',
    font: 'BC',
  },
  {
    name: COMPANY_LIST.sh_card,
    iconSvgPath: '/assets/sh_card.svg',
    color: '#0046FF',
    font: 'Shinhan',
  },
  {
    name: COMPANY_LIST.kakao_bank,
    iconSvgPath: '/assets/kakao_bank.svg',
    color: '#FFE600',
    font: 'KakaoBank',
  },
  {
    name: COMPANY_LIST.hd_card,
    iconSvgPath: '/assets/hd_card.svg',
    color: '#000000',
    font: 'Hyundai',
  },
  {
    name: COMPANY_LIST.wr_card,
    iconSvgPath: '/assets/wr_card.svg',
    color: '#007BC8',
    font: 'Woori',
  },
  {
    name: COMPANY_LIST.lt_card,
    iconSvgPath: '/assets/lt_card.svg',
    color: '#ED1C24',
    font: 'Lotte',
  },
  {
    name: COMPANY_LIST.hn_card,
    iconSvgPath: '/assets/hn_card.svg',
    color: '#009490',
    font: 'Hana',
  },
  {
    name: COMPANY_LIST.kb_card,
    iconSvgPath: '/assets/kb_card.svg',
    color: '#685E54',
    font: 'KB',
  },
] as const;

export const MIN_MONTH = 1;
export const MAX_MONTH = 12;

export const MIN_YEAR = new Date().getFullYear() - 2000;
export const MAX_YEAR = new Date().getFullYear() - 1995;

export const MAX_DATE_LENGTH = 2;
export const MAX_NUMBER_LENGTH = 4;
export const MAX_SECURITY_CODE_LENGTH = 3;
export const MAX_OWNER_NAME_LENGTH = 30;
export const MAX_PASSWORD_LENGTH = 1;
