export type CardNumbers = Record<'first' | 'second' | 'third' | 'fourth', string>;
export type ExpirationDate = Record<'month' | 'year', string>;
export type Password = Record<'first' | 'second', string>;

export interface CardInfo {
  cardNumbers: CardNumbers;
  expirationDate: ExpirationDate;
  ownerName?: string;
  securityCode: string;
  password: Password;
}
