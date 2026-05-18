import type { CardInfo } from "../types";
import type { CreateCardRequest } from "../apis/cards";

export const toCreateCardRequest = (cardInfo: CardInfo): CreateCardRequest => ({
  number: cardInfo.numbers.join(""),
  expirationDate: `${cardInfo.expiry[0]}/${cardInfo.expiry[1]}`,
  cvc: cardInfo.cvc,
  issuerCode: cardInfo.issuerCode,
});
