import type { IssuerKoreanNameType } from "../../../shared/types/Issuer";

export const isCardCompanyFieldValid = (
  cardCompany: IssuerKoreanNameType | null,
) => {
  return cardCompany !== null;
};
