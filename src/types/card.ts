export type Card = {
  cardNumberOrigin: string;
  cardNumberHidden: string;
  cardDate: string;
  cardOwnerName: string;
  cardCVC: string;
  cardPassword: [FirstPassword, SecondPassword];
};

export type CreditCard = Card & {
  cardName: string;
};

export type FirstPassword = string;
export type SecondPassword = string;
