import { COMPANY_NAME } from 'components/common/Card/types';

export const ICON_SVG_PATH = {
  BC카드: '/assets/bc_card.svg',
  신한카드: '/assets/sh_card.svg',
  카카오뱅크: '/assets/kakao_bank.svg',
  현대카드: '/assets/hd_card.svg',
  우리카드: '/assets/wr_card.svg',
  롯데카드: '/assets/lt_card.svg',
  하나카드: '/assets/hn_card.svg',
  국민카드: '/assets/kb_card.svg',
} as const;

export const CARD_COLOR = {
  BC카드: '#F04652',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#685E54',
} as const;

export const COMPANY_LIST: COMPANY_NAME[] = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
];
