import { ChangeEvent } from 'react';

export type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

export type CardPassword = {
  first: string;
  second: string;
};
export type CardType = {
  id: string;
  cardType: string;
  cardNumber: CardNumber;
  cardOwner: string;
  expired: string;
  securityCode: string;
  cardPassword: CardPassword;
  cardNickName: string;
};

export type InputHook<T> = {
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type PasswordInputHook<T> = [T, (e: React.ChangeEvent<HTMLInputElement>) => void];

export type FormCardAddProps = {
  cardType: string;
  cardNumber: InputHook<CardNumber>;
  cardExpire: InputHook<string>;
  cardOwner: InputHook<string>;
  securityCode: InputHook<string>;
  cardPasswordFirstDigit: InputHook<string>;
  cardPasswordSecondDigit: InputHook<string>;
  cardFlipper: React.Dispatch<React.SetStateAction<boolean>>;
};

export type actionName = 'CARDLIST_REQUEST' | 'CARDLIST_SUCCESS' | 'CARDLIST_FAILURE';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType: string;
  passwordType?: string;
  minDataLength: number;
  maxDataLength: number;
  dataId: number;
  refObject: React.Ref<HTMLInputElement>;
  handleError: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  nextFocus: (e: ChangeEvent) => void;
  onFlip: () => void;
  handleInputData: (index: number, e: ChangeEvent<HTMLInputElement>) => void;
}
