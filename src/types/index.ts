export type Card = {
  number: {
    firstGroup: string;
    secondGroup: string;
    thirdGroup: string;
    fourthGroup: string;
  };

  expirationDate: {
    month: string;
    year: string;
  };

  ownerName: string;
  securityCode: string;
  password: string;
};
