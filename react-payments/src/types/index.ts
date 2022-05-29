export type CardName = string;

export type CardNumberKeys = "first" | "second" | "third" | "fourth";

export type CardNumber = {
  [key in CardNumberKeys]?: string;
};

export type CardPasswordKeys = "first" | "second";

export type CardPassword = {
  [key in CardPasswordKeys]?: string;
};

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

export interface ReadyGroup {
  cardNumberReady: boolean;
  expireDateReady: boolean;
  securityCodeReady: boolean;
  cardPasswordReady: boolean;
  cardTypeReady: boolean;
}

//Provider
export interface Target {
  target: HTMLInputElement;
}

// CardDataProvider
export type CardDataAction = { type: "CREATE"; payload: CardData };

// CardNumberProvider
export interface KeyEventTarget extends Target {
  key: string;
}

interface CardNumberFunction {
  onChangeCardNumber: ({ target }: Target) => void;
  onKeyDownCardNumber: ({ target, key }: KeyEventTarget) => void;
  resetCardNumber: () => void;
}

export interface CardNumberContextProvider {
  state: { cardNumber: CardNumber; cardNumberReady: boolean };
  action: CardNumberFunction;
}

//CardPasswordProvider
interface CardPasswordFunction {
  onChangeCardPassword: ({ target }: Target) => void;
  onClickCardPasswordBackspaceButton: () => void;
  onClickCardPasswordVirtualKeyboard: (value: string) => void;
  resetCardPassword: () => void;
}

export interface CardPasswordContextProvider {
  state: { cardPassword: CardPassword; cardPasswordReady: boolean };
  action: CardPasswordFunction;
}

//CardTypeProvider
export interface CardTypeFunction {
  onClickCardType: ({ cardType, cardName }: CardType) => void;
  resetCardTypeInfo: () => void;
}

export interface CardTypeContextProvider {
  state: { cardTypeInfo: CardType; cardTypeReady: boolean };
  action: CardTypeFunction;
}
