import { CARD_COMPANY, CardCompanyState } from "../constants/constants";

export const isCardCompanyState = (
  value: string
): value is CardCompanyState => {
  const validValues = Object.values(CARD_COMPANY);
  return validValues.some((validValue) => validValue === value);
};
