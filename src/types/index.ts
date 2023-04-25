export type CardNumber = {
  firstGroup: string;
  secondGroup: string;
  thirdGroup: string;
  fourthGroup: string;
};

export type CardExpirationDateKey = "month" | "year";

export type CardExpirationDate = Record<CardExpirationDateKey, string>;

export type CardPasswordKey = "first" | "second";

export type CardPassword = Record<CardPasswordKey, string>;

export type Card = {
  cardCompany: string;
  cardNumber: CardNumber;
  expirationDate: CardExpirationDate;
  ownerName: string;
  securityCode: string;
  password: CardPassword;
};
