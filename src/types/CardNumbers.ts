import { NextStepArgs } from '@/hooks/useStep';
import { MouseEventHandler } from 'react';

export type CardNumbersInputSectionProps = {
  cardNumbers: CardNumbers;
  setCardNumbers: (
    target: CardNumbersKeys
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardNumbersBlur: (target: CardNumbersKeys) => void;
  isError: IsError;
  errorMessage: string;
  inputRef: {
    firstNumber: React.RefObject<HTMLInputElement | null>;
    secondNumber: React.RefObject<HTMLInputElement | null>;
    thirdNumber: React.RefObject<HTMLInputElement | null>;
    fourthNumber: React.RefObject<HTMLInputElement | null>;
  };
  handleMouseDown: MouseEventHandler<HTMLInputElement>;
  goNextStep: (args: NextStepArgs) => void;
};

export type CardNumbersOptions = {
  errorMessage: string;
} & CardNumbersOptionsWithoutErrormessage;

export type CardNumbersOptionsWithoutErrormessage = {
  cardNumbers: CardNumbers;
  setCardNumbers: (
    target: CardNumbersKeys
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardNumbersBlur: (target: CardNumbersKeys) => void;
  isError: IsError;
  resetCardNumbers: () => void;
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
