export default interface CardInfo {
  cardNumber: string[];
  cardExpirationDate: { month: string; year: string };
  cardCVC: string;
  cardPassword: string;
}
