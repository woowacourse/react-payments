export interface CardInfo {
  cardTitle: string,
  cardNumber: {
    fisrt: string,
    second: string,
    third: string,
    fourth: string
  }
  expiracy: {
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