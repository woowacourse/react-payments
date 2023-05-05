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
  },
  {
    name: COMPANY_LIST.sh_card,
    iconSvgPath: '/assets/sh_card.svg',
    color: '#0046FF',
  },
  {
    name: COMPANY_LIST.kakao_bank,
    iconSvgPath: '/assets/kakao_bank.svg',
    color: '#FFE600',
  },
  {
    name: COMPANY_LIST.hd_card,
    iconSvgPath: '/assets/hd_card.svg',
    color: '#000000',
  },
  {
    name: COMPANY_LIST.wr_card,
    iconSvgPath: '/assets/wr_card.svg',
    color: '#007BC8',
  },
  {
    name: COMPANY_LIST.lt_card,
    iconSvgPath: '/assets/lt_card.svg',
    color: '#ED1C24',
  },
  {
    name: COMPANY_LIST.hn_card,
    iconSvgPath: '/assets/hn_card.svg',
    color: '#009490',
  },
  {
    name: COMPANY_LIST.kb_card,
    iconSvgPath: '/assets/kb_card.svg',
    color: '#685E54',
  },
] as const;
