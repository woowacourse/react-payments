export interface Card {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
  month: string;
  year: string;
  userName: string;
}

export interface CardInfo {
  cardNumbers : CardNumbers;
  expirationDate : ExpirationDate;
  userName : UserName;
  cardBrand : CardBrand;
  CVC : CVC;
}

export interface State {
  value: string;
  errorMessage: string;
  isError : boolean;
}

export interface CardNumbers {
  cardNumber1: State;
  cardNumber2: State;
  cardNumber3: State;
  cardNumber4: State;
}

export interface ExpirationDate {
  month : State,
  year : State
}

export interface UserName { 
  userName : State
}

export interface CardBrand{
  cardBrand : State
}

export interface CVC {
  CVC : State
}
