export type CreditCard = {
  cardNumberOrigin: string;
  cardNumberHidden: string;
  cardDate: string;
  cardOwnerName: string;
  cardCVC: string;
  cardPassword: [FirstPassword, SecondPassword];
};

export type FirstPassword = string;
export type SecondPassword = string;
