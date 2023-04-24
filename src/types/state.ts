export type CardNumbers = Record<'first' | 'second' | 'third' | 'fourth', string>;
export type ExpirationDate = Record<'month' | 'year', string | null>;
export type OwnerName = string | null;
export type Password = Record<'first' | 'second', string>;

export interface CardInfo {
  cardNumbers: CardNumbers;
  expirationDate: ExpirationDate;
  ownerName: OwnerName;
  securityCode: string;
  password: Password;
}

export type SetCardNumbers = React.Dispatch<React.SetStateAction<CardNumbers>>;
export type SetExpirationDate = React.Dispatch<React.SetStateAction<ExpirationDate>>;
export type SetOwnerName = React.Dispatch<React.SetStateAction<OwnerName>>;
export type SetSecurityCode = React.Dispatch<React.SetStateAction<string>>;
export type SetPassword = React.Dispatch<React.SetStateAction<Password>>;

export type SetCardInfoList = React.Dispatch<React.SetStateAction<CardInfo[]>>;
export type SetCardInfo = React.Dispatch<React.SetStateAction<CardInfo>>;
