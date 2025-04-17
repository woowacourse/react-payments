export type CardNumbersOptions = {
  errorMessage: string;
} & CardNumbersOptionsWithoutErrormessage;

export type CardNumbersOptionsWithoutErrormessage = {
  cardNumbers: CardNumbers;
  setCardNumbers: (
    target: CardNumbersKeys
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: IsError;
};

export type CardNumbers = {
  firstNumber: string;
  secondNumber: string;
  thirdNumber: string;
  fourthNumber: string;
};

export type CardNumbersKeys =
  | 'firstNumber'
  | 'secondNumber'
  | 'thirdNumber'
  | 'fourthNumber';

export type IsError = {
  firstNumber: boolean;
  secondNumber: boolean;
  thirdNumber: boolean;
  fourthNumber: boolean;
};
