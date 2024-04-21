interface CardInformation {
  cardNumbers: [string, string, string, string];
  cardExpiration: {
    month: string;
    year: string;
  };
  cardOwnerName: string;
}
