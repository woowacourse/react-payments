import { CARD_ISSUERS } from "../constants/cardIssuers";

export type CardIssuer = (typeof CARD_ISSUERS)[number];

export const isCardIssuer = (value: string): value is CardIssuer => {
  return (CARD_ISSUERS as readonly string[]).includes(value);
};

export interface CardInformation {
  cardIssuer: CardIssuer | "";
  cardNumbers: [string, string, string, string];
  cardExpiration: {
    month: string;
    year: string;
  };
  cardOwnerName: string;
}
