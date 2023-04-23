export interface CardType {
  cardNumber: string;
  expiredDate: string;
  ownerName: string;
  cvc?: string;
  password?: string[];
  color: string;
}
