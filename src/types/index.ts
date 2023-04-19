export type CardNumber = {
  firstGroup: string;
  secondGroup: string;
  thirdGroup: string;
  fourthGroup: string;
};

export type CardExpirationDate = {
  month: string;
  year: string;
};

export type Card = {
  cardNumber: CardNumber;
  expirationDate: CardExpirationDate;
  ownerName: string;
  securityCode: string;
  password: string;
};
