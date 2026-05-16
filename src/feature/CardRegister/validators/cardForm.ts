import type { CardCompanyType } from "../../../common/types/CardCompany";

export const isCardCompanyFieldValid = (
  cardCompany: CardCompanyType | null,
) => {
  return cardCompany !== null;
};
