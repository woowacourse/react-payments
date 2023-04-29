import { ChangeEvent, RefObject } from 'react';

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
  id: number;
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
  cardPassword1: InputHook<string>;
  cardPassword2: InputHook<string>;
  cardFlipper: React.Dispatch<React.SetStateAction<boolean>>;
};

export type actionName = 'CARDLIST_REQUEST' | 'CARDLIST_SUCCESS' | 'CARDLIST_FAILURE';

type inputModeType =
  | 'search'
  | 'text'
  | 'email'
  | 'tel'
  | 'url'
  | 'none'
  | 'numeric'
  | 'decimal'
  | undefined;

export type InputProps = {
  required: boolean;
  inputType: string;
  inputMode: inputModeType;
  passwordType?: string;
  className?: string;
  value: string;
  minDataLength: number;
  maxDataLength: number;
  name: string;
  dataId: number;
  refObject: RefObject<HTMLInputElement>;
  handleError: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextFocus: (e: ChangeEvent) => void;
  onFlip: () => void;
  handleInputData: (index: number, e: ChangeEvent<HTMLInputElement>) => void;
};
