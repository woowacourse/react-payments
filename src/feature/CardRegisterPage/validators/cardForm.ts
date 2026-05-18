import type { IssuerKoreanNameType } from "../../../shared/types/CardCompany";

export const isCardCompanyFieldValid = (
  cardCompany: IssuerKoreanNameType | null,
) => {
  return cardCompany !== null;
};
