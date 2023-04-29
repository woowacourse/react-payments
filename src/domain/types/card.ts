type CardInformation = {
  cardType: CardType;
  cardNumber: [string, string, string, string];
  expirationDate: [string, string];
  owner: string;
  alias?: string;
};

type CardType = 'BC카드' | '신한카드' | '카카오카드' | '현대카드' | '우리카드' | '롯데카드' | '하나카드' | '국민카드';

export type { CardInformation, CardType };
