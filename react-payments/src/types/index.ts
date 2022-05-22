export interface CardDataType {
  id: string;
  cardNumber: SeveralInputType;
  cardPassword: SeveralInputType;
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
