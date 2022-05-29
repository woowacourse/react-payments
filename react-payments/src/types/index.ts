export type CardName = string;

type CardNumberKeys = "first" | "second" | "third" | "fourth";
export type CardNumber = {
  [key in CardNumberKeys]?: string;
};

type CardPasswordKeys = "first" | "second";
export type CardPassword = {
  [key in CardPasswordKeys]?: string;
};

type ExpireDateKeys = "month" | "year";
export type ExpireDate = {
  [key in ExpireDateKeys]?: string;
};

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

export interface KeyEventTarget extends Target {
  key: string;
}

// CardDataProvider
export type CardDataAction = { type: "CREATE"; payload: CardData };

// CardNumberProvider
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
interface CardTypeFunction {
  onClickCardType: ({ cardType, cardName }: CardType) => void;
  resetCardTypeInfo: () => void;
}

export interface CardTypeContextProvider {
  state: { cardTypeInfo: CardType; cardTypeReady: boolean };
  action: CardTypeFunction;
}

//ExpireDateProvider
interface ExpireDateFunction {
  onChangeExpireDate: ({ target }: Target) => void;
  onKeyDownExpireDate: ({ target, key }: KeyEventTarget) => void;
  resetExpireDate: () => void;
}

export interface ExpireDateContextProvider {
  state: { expireDate: ExpireDate; expireDateReady: boolean };
  action: ExpireDateFunction;
}

//SecurityCodeProvider
interface SecurityCodeFunction {
  onChangeSecurityCode: ({ target }: Target) => void;
  onClickSecurityVirtualKeyboard: (value: string) => void;
  onClickSecurityBackspaceButton: () => void;
  resetSecurityCode: () => void;
}

export interface SecurityCodeContextProvider {
  state: { securityCode: SecurityCode; securityCodeReady: boolean };
  action: SecurityCodeFunction;
}
