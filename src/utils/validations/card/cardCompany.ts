import { CARD_COMPANY } from "../../../constants/constants";
import { CardCompanyState } from "../../../types/types";
import { isEmpty } from "../common";

export const isErrorCardCompany = (value: string): string | null => {
  if (isEmpty(value)) return "카드사를 하나 선택해주세요";
  return null;
};

export const isCardCompanySelected = (
  cardCompany: CardCompanyState
): boolean => {
  return cardCompany !== CARD_COMPANY.none;
};
