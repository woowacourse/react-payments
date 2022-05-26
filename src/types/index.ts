export interface CardType {
  cardColor: string;
  cardCompany: string;
  cardName: string;
  cardOwnerName: string;
  cardNumber: string;
  cardCVC: string;
  cardPassword: string;
  validDate: string;
}

export interface State {
  card: CardType;
  cardList: Array<CardType>;
}

export interface Action {
  type: string;
  payload: any;
}
