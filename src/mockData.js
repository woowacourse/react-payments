import PALETTE from './styles/palette';

const dummyCards = [
  {
    key: '1',
    color: PALETTE.COLLIN_ORANGE,
    width: '208px',
    height: '130px',
    bank: '포코 카드',
    owner: 'POCO',
    numbers: ['1111', '2222', '3333', '4444'],
    expirationDate: '04/21',
    alias: '엄카',
  },
  {
    key: '2',
    color: PALETTE.SUN_YELLOW,
    width: '208px',
    height: '130px',
    bank: '로이드 카드',
    owner: 'LOYD',
    numbers: ['4444', '3333', '2222', '1111'],
    expirationDate: '02/17',
    alias: '법카',
  },
];

const dummyBanks = [
  {
    id: '1p',
    color: PALETTE.POCO_RED,
    name: '포코 카드',
  },
  {
    id: '2j',
    color: PALETTE.JUN_BLUE,
    name: '준 카드',
  },
  {
    id: '3k',
    color: PALETTE.PARK_GREEN,
    name: '공원 카드',
  },
  {
    id: '4b',
    color: PALETTE.BRAN_PINK,
    name: '브랜 카드',
  },
  {
    id: '5l',
    color: PALETTE.LOYD_MINT,
    name: '로이드 카드',
  },
  {
    id: '6d',
    color: PALETTE.DOBY_PINK,
    name: '도비 카드',
  },
  {
    id: '7c',
    color: PALETTE.COLLIN_ORANGE,
    name: '콜린 카드',
  },
  {
    id: '8s',
    color: PALETTE.SUN_YELLOW,
    name: '썬 카드',
  },
];

export { dummyCards, dummyBanks };
