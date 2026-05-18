import type { IssuerCodeType } from "../../../shared/types/Issuer";

export type PostCardRequestBody = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: IssuerCodeType;
};
