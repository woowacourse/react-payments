export default interface CardInfo {
  cardNumber: string[];
  cardCompany: string;
  cardExpirationDate: ExpDateType;
  cardCVC: string;
  cardPassword: string;
}

export interface ExpDateType {
  month: string;
  year: string;
}
