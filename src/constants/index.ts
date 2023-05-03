import { COMPANY_NAME } from 'components/common/Card/types';

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

export const CARDS_INFO = [
  {
    name: COMPANY_LIST[0],
    iconSvgPath: '/assets/bc_card.svg',
    color: '#F04652',
  },
  {
    name: COMPANY_LIST[1],
    iconSvgPath: '/assets/sh_card.svg',
    color: '#0046FF',
  },
  {
    name: COMPANY_LIST[2],
    iconSvgPath: '/assets/kakao_bank.svg',
    color: '#FFE600',
  },
  {
    name: COMPANY_LIST[3],
    iconSvgPath: '/assets/hd_card.svg',
    color: '#000000',
  },
  {
    name: COMPANY_LIST[4],
    iconSvgPath: '/assets/wr_card.svg',
    color: '#007BC8',
  },
  {
    name: COMPANY_LIST[5],
    iconSvgPath: '/assets/lt_card.svg',
    color: '#ED1C24',
  },
  {
    name: COMPANY_LIST[6],
    iconSvgPath: '/assets/hn_card.svg',
    color: '#009490',
  },
  {
    name: COMPANY_LIST[7],
    iconSvgPath: '/assets/kb_card.svg',
    color: '#685E54',
  },
] as const;
