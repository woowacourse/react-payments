import { CardIssuer } from "../constants/cardIssuers";

export interface CardInformation {
  cardIssuer: CardIssuer | "";
  cardNumbers: [string, string, string, string];
  cardExpiration: {
    month: string;
    year: string;
  };
  cardOwnerName: string;
}
