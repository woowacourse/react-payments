export type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

type CardProps = {
  cardType: string;
  cardFirstNumber: string;
  cardSecondNumber: string;
  cardThirdNumber: string;
  cardFourthNumber: string;
  cardOwner: string;
  expireMonth: string;
  expireYear: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
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
  expireMonth: string;
  expireYear: string;
  securityCode: string;
  cardPassword: CardPassword;
};

export type InputHook = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  status: InputStatus;
};

export type InputStatus = 'INIT' | 'VALID' | 'INVALID';

export type PasswordInputHook<T> = [T, (e: React.ChangeEvent<HTMLInputElement>) => void];

export type FormCardAddProps = {
  cardFirstNumber: InputHook;
  cardSecondNumber: InputHook;
  cardThirdNumber: InputHook;
  cardFourthNumber: InputHook;
  cardOwner: InputHook;
  securityCode: InputHook;
  cardPassword1: InputHook;
  cardPassword2: InputHook;
  expireMonth: InputHook;
  expireYear: InputHook;
};

export type AddCardNumberInputProps = Pick<
  FormCardAddProps,
  'cardFirstNumber',
  'cardSecondNumber',
  'cardThirdNumber',
  'cardFourthNumber'
>;

export type AddCardExpireDateInputProps = Pick<FormCardAddProps, 'expireMonth', 'expireYear'>;
export type AddCardOwnerInputProps = Pick<FormCardAddProps, 'cardOwner'>;
export type AddCardSecurityCodeInputProps = Pick<FormCardAddProps, 'securityCode'>;
export type AddCardPasswordInputProps = Pick<FormCardAddProps, 'password1', 'password2'>;

export type ErrorMessageProps = {
  inputType: string;
  status: InputStatus;
};

export type InputContainerProps = {
  className: string;
  status: InputStatus;
  inputType: string;
};
