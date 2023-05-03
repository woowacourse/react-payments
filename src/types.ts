export interface CardInfo {
  cardTitle: string,
  cardNumber: {
    first: string,
    second: string,
    third: string,
    fourth: string
  }
  expiration: {
    month: string;
    year: string;
  }
  owner: string;
  cvc?: string;
  password?: {
    first: string;
    second: string;
  }
  nickName?: string;
}