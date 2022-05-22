export interface CardDataType {
  id: string;
  cardNumber: CardNumberType;
  cardPassword: CardPasswordType;
  securityCode: SecurityCodeType;
  userName: UserNameType;
  cardName: CardNameType;
  month: string;
  year: string;
  CardTypeInfo: CardTypeInfoType;
}

export interface AllCardData {
  [key: string]: CardDataType;
}

export type EditedCardData<T, KP> = Partial<T> &
  { [K in keyof KP]-?: K extends keyof T ? T[K] : never };

export type CardNumberType = {
  [key: string]: string;
};

export type CardPasswordType = {
  [key: string]: string;
};

export type SecurityCodeType = string;

export type UserNameType = string;

export type CardNameType = string;

export type ExpireDateType = {
  [key: string]: string;
};

export type CardTypeInfoType = {
  cardName: string;
  cardType: string;
};
