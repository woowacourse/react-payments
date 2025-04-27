export default interface CardInfo {
  cardNumber: string[];
  cardCompany: string;
  cardExpirationDate: { month: string; year: string };
  cardCVC: string;
  cardPassword: string;
}
