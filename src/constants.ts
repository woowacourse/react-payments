export const LOCAL_STORAGE_KEY = {
  cardList: 'cardList',
};

export const CARD_COMPANY_COLOR_MAP = {
  BC카드: { background: 'rgb(222, 84, 86)', color: 'white' },
  신한카드: { background: 'rgb(19, 74, 245)', color: 'white' },
  카카오뱅크: { background: 'rgb(251, 230, 77)', color: 'black' },
  현대카드: { background: 'rgb(51, 51, 51)', color: 'white' },
  우리카드: { background: 'rgb(187, 223, 245)', color: 'rgb(51, 122, 194)' },
  롯데카드: { background: 'rgb(240, 240, 240)', color: 'rgb(225, 0, 0)' },
  하나카드: { background: 'rgb(64, 146, 143)', color: 'white' },
  국민카드: { background: 'rgb(85, 79, 71)', color: 'rgb(247, 206, 71)' },
} as const satisfies Record<string, { background: string; color: string }>;

export const CARD_COMPANY_OPTION_MATRIX = [
  [
    {
      iconSrc: './icons/BC카드.svg',
      cardCompany: 'BC카드',
    },
    {
      iconSrc: './icons/신한카드.svg',
      cardCompany: '신한카드',
    },
    {
      iconSrc: './icons/카카오뱅크.svg',
      cardCompany: '카카오뱅크',
    },
    {
      iconSrc: './icons/현대카드.svg',
      cardCompany: '현대카드',
    },
  ],
  [
    {
      iconSrc: './icons/우리카드.svg',
      cardCompany: '우리카드',
    },
    {
      iconSrc: './icons/롯데카드.svg',
      cardCompany: '롯데카드',
    },
    {
      iconSrc: './icons/하나카드.svg',
      cardCompany: '하나카드',
    },
    {
      iconSrc: './icons/국민카드.svg',
      cardCompany: '국민카드',
    },
  ],
] as const;

export const EXPIRE_DATE_VALID_MESSAGE = {
  invalidMonth: '1월에서 12월 사이로 입력 해주세요',
  invalidYear: '유효기간은 현재부터 최대 5년입니다.',
};
