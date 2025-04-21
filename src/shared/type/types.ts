export interface CardInfoProps {
  cardNumber: string[];
  cardExpirationDate: { month: string; year: string };
  cardCVC: string;
}

export interface ErrorProps {
  [key: string]: [number, string];
}
