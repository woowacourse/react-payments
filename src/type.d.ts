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
  cardExpire: InputHook;
  cardOwner: InputHook;
  securityCode: InputHook;
  cardPassword1: InputHook;
  cardPassword2: InputHook;
};

export type AddCardNumberInputProps = Pick<FormCardAddProps, 'cardNumber'>;
export type AddCardExpireDateInputProps = Pick<FormCardAddProps, 'cardExpire'>;
export type AddCardOwnerInputProps = Pick<FormCardAddProps, 'cardOwner'>;
export type AddCardSecurityCodeInputProps = Pick<FormCardAddProps, 'securityCode'>;
