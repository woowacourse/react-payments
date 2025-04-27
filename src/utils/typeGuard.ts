import { CARD_COMPANY } from "../constants/card";
import { CardCompanyState } from "../types/card";

export const isCardCompanyState = (
  value: string
): value is CardCompanyState => {
  const validValues = Object.values(CARD_COMPANY);
  return validValues.some((validValue) => validValue === value);
};
