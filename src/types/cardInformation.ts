import { CardIssuer } from "../constants/cardIssuers";

export interface CardInformation {
  cardNumbers: [string, string, string, string];
  cardIssuer: CardIssuer | "";
  cardExpiration: {
    month: string;
    year: string;
  };
  cardOwnerName: string;
  cardCVC: string;
}
