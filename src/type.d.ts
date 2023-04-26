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

export type AddCardFormProps = {
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

export type CardNumberInputProps = Pick<
  AddCardFormProps,
  'cardFirstNumber',
  'cardSecondNumber',
  'cardThirdNumber',
  'cardFourthNumber'
>;

export type ExpireDateInputProps = Pick<AddCardFormProps, 'expireMonth', 'expireYear'>;
export type OwnerInputProps = Pick<AddCardFormProps, 'cardOwner'>;
export type SecurityCodeInputProps = Pick<AddCardFormProps, 'securityCode'>;
export type PasswordInputProps = Pick<AddCardFormProps, 'password1', 'password2'>;

export type InputType = 'securityCode' | 'password' | 'owner' | 'expired' | 'cardNumber';

export type ErrorMessageProps = {
  inputType: InputType;
  status: InputStatus;
};

export type InputContainerProps = {
  className: string;
  status: InputStatus;
  inputType: InputType;
};
