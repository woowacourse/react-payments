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

export type SetCardInfoList = React.Dispatch<React.SetStateAction<CardInfo[]>>;
export type SetCardInfo = React.Dispatch<React.SetStateAction<CardInfo>>;
