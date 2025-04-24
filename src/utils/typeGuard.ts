import { CARD_COMPANY } from "../constants/constants";
import { CardCompanyState } from "../types/types";

export const isCardCompanyState = (
  value: string
): value is CardCompanyState => {
  const validValues = Object.values(CARD_COMPANY);
  return validValues.some((validValue) => validValue === value);
};
