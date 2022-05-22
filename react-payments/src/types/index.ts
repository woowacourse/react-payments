export interface CardDataType {
  id: string;
  cardNumber: SeveralInputType;
  cardPassword: SeveralInputType;
  securityCode: SecurityCodeType;
  userName: UserNameType;
  cardName: CardNameType;
  month: string;
  year: string;
  cardTypeInfo: CardTypeInfoType;
}

export interface AllCardData {
  [key: string]: CardDataType;
}

export type SeveralInputType = {
  [key: string]: string;
};

export type SecurityCodeType = string;

export type UserNameType = string;

export type CardNameType = string;

export type CardType =
  | "defaultCard"
  | "pocoCard"
  | "junCard"
  | "gongwonCard"
  | "branCard"
  | "roidCard"
  | "dobbyCard"
  | "collinCard"
  | "sunCard";

export type CardTypeInfoType = {
  cardName: string;
  cardType: CardType;
};

export type WithRequiredProperty<Type, P extends keyof Type> = Type &
  {
    [Property in P]-?: Type[Property];
  };
