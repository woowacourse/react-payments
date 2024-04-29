export interface CardInfo {
  cardNumbers: CardNumbers;
  expirationDate: ExpirationDate;
  userName: UserName;
  cardBrand: CardBrand;
  CVC: CVC;
  password: Password;
}

export interface State {
  value: string;
  errorMessage: string;
  isError: boolean;
}

export interface CardNumbers {
  cardNumberFields: {
    cardNumber1: State;
    cardNumber2: State;
    cardNumber3: State;
    cardNumber4: State;
  };
  isNextField: boolean;
}
export interface ExpirationDate {
  expirationDateFields : {
    month: State;
    year: State;
  }
  isNextField : boolean;
}

export interface UserName {
  userNameField : {
    userName: State;
  }
  isNextField : boolean;
}

export interface CardBrand {
  cardBrandField : {
    cardBrand: State;
  }
  isNextField : boolean;
}

export interface CVC {
  CVCField : {
    CVC: State;
  };
  isNextField : boolean;
}

export interface Password {
  passwordField : {
    password: State;
  }
  isNextField: boolean;
}
