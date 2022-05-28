type CardColor =
  | '#E24141'
  | '#547CE4'
  | '#73BC6D'
  | '#DE59B9'
  | '#04C09E'
  | '#E76E9A'
  | '#F37D3B'
  | '#FBCD58'
  | '#e5e5e5';

type CardAction = {
  type: string;
  value?: string;
  index?: number;
  errorMessage?: string;
  newCardData?: object;
};

interface CardData {
  cardNumber: string[];
  cardOwner: string;
  cardExpiration: string[];
  cardName: string;
  cardColor: string;
  cardNickname?: string;
}

export type { CardColor, CardAction, CardData };
