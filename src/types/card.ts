export interface CardInfo {
  cardNumbers : CardNumbers;
  expirationDate : ExpirationDate;
  userName : UserName;
  cardBrand : CardBrand;
  CVC : CVC;
  password: Password;
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

export interface Password{
  password : State
}