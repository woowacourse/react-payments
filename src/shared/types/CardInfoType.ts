import type { IssuerKoreanNameType } from "./Issuer";

export type CardNumberChunkType = [string, string, string, string];

export type CardInfoType = {
  cardNumbers: CardNumberChunkType;
  expiryMonth: string;
  expiryYear: string;
  selectedCardCompany: IssuerKoreanNameType | null;
};
