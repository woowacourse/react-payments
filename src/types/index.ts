export type CardNumber = {
  firstGroup: string;
  secondGroup: string;
  thirdGroup: string;
  fourthGroup: string;
};

export type CardExpirationDateKey = "month" | "year";

export type CardExpirationDate = Record<CardExpirationDateKey, string>;

export type Card = {
  cardNumber: CardNumber;
  expirationDate: CardExpirationDate;
  ownerName: string;
  securityCode: string;
  password: string;
};
