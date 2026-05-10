import { CARD_COMPANIES } from "../constants/cardCompanies";

const COMPANY_COLOR_MAP = new Map(CARD_COMPANIES.map((c) => [c.name, c.color]));

export const decideBrandName = (number: string) => {
  if (/^4/.test(number)) {
    return "visa";
  } else if (/^5[1-5]/.test(number)) {
    return "master";
  }
  return "";
};

export const decideCardColor = (company: string) => {
  return COMPANY_COLOR_MAP.get(company) ?? "#333333";
};
