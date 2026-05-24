import type { IssuerCode } from "../cardIssuer";
import type { CardRegisterErrorCode } from "./cards.error";

export type CardRegisterErrorResponse = {
  code: CardRegisterErrorCode;
  message: string;
};

export type CardRegisterRequestBody = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: IssuerCode;
};

export type CardListResponseItem = {
  id: string;
  issuerCode: IssuerCode;
  number: string;
  expirationDate: string;
};
