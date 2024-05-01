export const CARD_INFORMATION = {
  visa: '4',
  masterCard: {
    min: 51,
    max: 55,
  },
};

export const CARD_DISPLAY_INDEX = {
  first: 0,
  second: 1,
  third: 2,
  fourth: 3,
};

export const CARD_PROVIDER_DEFAULT = '카드사를 선택해주세요';
export const CARD_PROVIDER_SELECT = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;
