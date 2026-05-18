import type { CardCompanyType } from "../../../shared/types/CardCompany";

export const isCardCompanyFieldValid = (
  cardCompany: CardCompanyType | null,
) => {
  return cardCompany !== null;
};
