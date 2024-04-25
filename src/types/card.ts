export interface CardInfo {
  cardNumbers: string[];
  expirationDate: string[];
  cardOwnerName: string;
  cardCompany: string;
  cardCVCNumber: string;
  cardPassword: string;
}

export interface CardFormValidity {
  cardNumbers: boolean;
  expirationDate: boolean;
  cardOwnerName: boolean;
  cardCompany: boolean;
  cardCVCNumber: boolean;
  cardPassword: boolean;
}
