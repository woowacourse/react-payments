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
};

export type InputHook<T> = {
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type PasswordInputHook<T> = [T, (e: React.ChangeEvent<HTMLInputElement>) => void];

export type FormCardAddProps = {
  cardNumber: InputHook<CardNumber>;
  cardExpire: InputHook<string>;
  cardOwner: InputHook<string>;
  securityCode: InputHook<string>;
  cardPassword1: InputHook<string>;
  cardPassword2: InputHook<string>;
};
