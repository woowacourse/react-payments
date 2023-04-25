export interface CreditCard {
  bank?: string;
  cardNumber: number[];
  expirationDate: string;
  owner: string;
  securityCode: string;
  password: number[];
}

export interface EachUserInputState {
  isComplete: boolean;
  userInput: string | string[];
}

export interface InputStatus {
  bank?: EachUserInputState;
  cardNumber: EachUserInputState;
  expirationDate: EachUserInputState;
  owner: EachUserInputState;
  securityCode: EachUserInputState;
  password: EachUserInputState;
}
