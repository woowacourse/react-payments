import type { IssuerCode } from "../cardIssuer";

export type CardRegisterError = {
  code: string;
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
