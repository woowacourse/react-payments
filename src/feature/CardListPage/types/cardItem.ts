import type { IssuerCodeType } from "../../../shared/types/Issuer";

export type CardItemInformationType = {
  id: string;
  issuerCode: IssuerCodeType;
  number: string;
  expirationDate: string;
};
