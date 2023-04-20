export interface CardType {
  cardNumber: string;
  expiredDate: string;
  ownerName: string;
  cvc?: string;
  password?: string[] | undefined;
  color: string;
}
