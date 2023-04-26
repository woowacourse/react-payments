export interface CardItemInfo {
  id: number;
  cardNumber: string[];
  expirationDate: string[];
  name: string;
  bankName: string;
}

export interface Card extends CardItemInfo {
  securityCode: string;
  password: string[];
}

export interface InputProps<T> {
  value: T;
  setValue: (value: T) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}
