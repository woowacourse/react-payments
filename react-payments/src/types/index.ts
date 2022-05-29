export type CardName = string;

export interface CardNumber {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface CardPassword {
  first: string;
  second: string;
}

export interface ExpireDate {
  month: string;
  year: string;
}

export interface CardType {
  cardName: string;
  cardType: string;
}

export type SecurityCode = string;

export type UserName = string;

export interface CardData extends ExpireDate {
  cardName: CardName;
  cardNumber: CardNumber;
  cardTypeInfo: CardType;
  userName: UserName;
}

// CardDataProvider
export type CardDataAction = { type: "CREATE"; payload: CardData };

// CardNumberProvider
export interface Target {
  target: HTMLInputElement;
}

export interface KeyEventTarget extends Target {
  key: string;
}

export interface CardNumberFunction {
  onChangeCardNumber: ({ target }: Target) => void;
  onKeyDownCardNumber: ({ target, key }: KeyEventTarget) => void;
  resetCardNumber: () => void;
}

export interface CardNumberContextProvider {
  state: { cardNumber: CardNumber; cardNumberReady: boolean };
  action: CardNumberFunction;
}
