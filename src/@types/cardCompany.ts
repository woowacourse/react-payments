import woori from '../assets/woori.png';
import bc from '../assets/bc.png';
import shinhan from '../assets/shinhan.png';
import kakao from '../assets/kakao.png';
import kb from '../assets/kb.png';
import lotte from '../assets/lotte.png';
import hana from '../assets/hana.png';
import hyundai from '../assets/hyundai.png';

export const KOR_NAME_BY_CARD_COMPANY = {
  bc: 'BC카드',
  shinhan: '신한카드',
  kakao: '카카오뱅크',
  hyundai: '현대카드',
  woori: '우리카드',
  lotte: '롯데카드',
  hana: '하나카드',
  kb: '국민카드',
} as const;

export const ICON_BY_CARD_COMPANY = {
  bc,
  shinhan,
  kakao,
  hyundai,
  woori,
  lotte,
  hana,
  kb,
} as const;

export const COLOR_BY_CARD_COMPANY = {
  bc: '#F04651',
  shinhan: '#025CFF',
  kakao: '#FFE600',
  hyundai: '#000000',
  woori: '#6BCAF2',
  lotte: '#F25A5C',
  hana: '#009490',
  kb: '#6A6056',
} as const;

export type CardCompany = keyof typeof KOR_NAME_BY_CARD_COMPANY;
