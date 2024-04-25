export type CardType = keyof typeof CARD_TYPE;

export const CARD_TYPE = {
  BC카드: 'BC카드',
  신한카드: '신한카드',
  카카오뱅크: '카카오뱅크',
  현대카드: '현대카드',
  우리카드: '우리카드',
  롯데카드: '롯데카드',
  하나카드: '하나카드',
  국민카드: '국민카드',
} as const;

export const CARD_COLOR = {
  [CARD_TYPE.BC카드]: '#F04651',
  [CARD_TYPE.신한카드]: '#0046FF',
  [CARD_TYPE.카카오뱅크]: '#FFE600',
  [CARD_TYPE.현대카드]: '#000000',
  [CARD_TYPE.우리카드]: '#007BC8',
  [CARD_TYPE.롯데카드]: '#ED1C24',
  [CARD_TYPE.하나카드]: '#009490',
  [CARD_TYPE.국민카드]: '#6A6056',
} as const;
