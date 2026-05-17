export interface SCard {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
  cvc: string;
}

export type SCardList = Omit<SCard, 'cvc'>[];
