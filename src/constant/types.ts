type CardName =
  | '포코 카드'
  | '도리 카드'
  | '호프 카드'
  | '공원 카드'
  | '콜라 카드'
  | '블링 카드'
  | '태태 카드'
  | '샐리 카드';
type CardColor = 'red' | 'blue' | 'green' | 'purple' | 'mint' | 'pink' | 'orange' | 'yellow';

export type CardInfoItem = {
  id: number;
  name: CardName;
  color: CardColor;
};
