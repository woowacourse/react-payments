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

export type AllCardData = {
  [key: string]: CardDataType;
};

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

export type WithoutMappedProperty<Type, P extends keyof Type, MappedType> =
  Type &
    {
      [Property in P]: MappedType;
    };

export enum CardNumberEnum {
  first = 1,
  second,
  third,
  fourth,
}

export enum FormTypeEnum {
  "expire-date" = "expire-date",
  "security-code" = "security-code",
  "card-password" = "card-password",
  "card-number" = "card-number",
  "user-name" = "user-name",
}

export const getProperty = <T, K extends keyof T>(
  object: T,
  propertyName: K
): T[K] => {
  return object[propertyName];
};
