import PALETTE from './palette';

export const LABEL = {
  CARD_NUMBER: '카드번호',
  EXP_DATE: '만료일',
  OWNER_NAME: '카드 소유자 이름',
  CVC: '보안 코드(CVC/CVV)',
  PASSWORD: '카드 비밀번호',
};

export const PLACEHOLDER = {
  MONTH: 'MM',
  YEAR: 'YY',
  OWNER_NAME: '카드에 표시된 이름과 동일하게 입력하세요.',
};

export const CARD_BRAND = [
  {
    name: '포코카드',
    color: PALETTE.CARD.POCO,
  },
  {
    name: '준카드',
    color: PALETTE.CARD.JUN,
  },
  {
    name: '공원카드',
    color: PALETTE.CARD.PARK,
  },
  {
    name: '브랜카드',
    color: PALETTE.CARD.BRAN,
  },
  {
    name: '로이드카드',
    color: PALETTE.CARD.LLOYD,
  },
  {
    name: '파노카드',
    color: PALETTE.CARD.FANO,
  },
  {
    name: '콜린카드',
    color: PALETTE.CARD.COLIN,
  },
  {
    name: '썬카드',
    color: PALETTE.CARD.SUN,
  },
];
