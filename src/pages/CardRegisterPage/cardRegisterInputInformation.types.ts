import type { IssuerKoreanName } from "../../domain/card/cardIssuer";
import type { CardNumber } from "../../domain/card/cardNumber";

export type CardRegisterInputInformation = {
  cardNumbers: CardNumber;
  expiryMonth: string;
  expiryYear: string;
  selectedIssuer: IssuerKoreanName | null;
};
