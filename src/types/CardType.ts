export interface CardType {
  expireMonth: string;
  expireYear: string;
  firstCardNumber: string;
  firstPassword: string;
  fourthCardNumber: string;
  ownerName: string;
  secondCardNumber: string;
  secondPassword: string;
  securityCode: string;
  thirdCardNumber: string;
}

export interface CardTypeWithNick extends CardType {
  nickName: string;
}

export interface AddCardContextInterface {
  card: CardType;
  updateCard: (newCard?: CardType) => void;
}
