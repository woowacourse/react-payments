interface ICardNumberState {
  firstCardNumber: string;
  secondCardNumber: string;
  thirdCardNumber: string;
  fourthCardNumber: string;
}

interface IExpireDateState {
  month: string;
  year: string;
}

interface IPasswordState {
  firstPassword: string;
  secondPassword: string;
}

interface IInitialState {
  cardNumber: ICardNumberState;
  expireDate: IExpireDateState;
  holderName: string;
  securityCode: string;
  password: IPasswordState;
  cardAlias: string;
}

interface ISetPayload {
  value: string;
}

interface ISetPayloadWithType extends ISetPayload {
  type: string;
}

type TPasswordLength = 0 | 1;
type TExpireDateLength = 0 | 1 | 2;
type TCardNumberLength = 0 | 1 | 2 | 3 | 4;

interface ICardCss {
  width: string;
  height: string;
  fontSize: string;
  cardContainerMarginBottom: string;
  cardChipWidth: string;
  cardChipHeight: string;
  cardNameMargin: string;
  cardChipMarginBottom: string;
  cardNumberMarginBottom: string;
}

export type {
  ICardNumberState,
  IExpireDateState,
  IPasswordState,
  IInitialState,
  TPasswordLength,
  TExpireDateLength,
  TCardNumberLength,
  ICardCss,
  ISetPayload,
  ISetPayloadWithType,
};
