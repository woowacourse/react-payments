import { CARD_COMPANIES } from "../constants/cardCompanies";

const COMPANY_COLOR_MAP = new Map(CARD_COMPANIES.map((c) => [c.name, c.color]));

export const BRAND_FIELD_CONFIG: Record<string, number[]> = {
  visa: [4, 4, 4, 4],
  master: [4, 4, 4, 4],
  amex: [4, 6, 5],
  diners: [4, 6, 4],
  unionpay: [4, 4, 4, 4],
};

export const DEFAULT_FIELD_CONFIG = [4, 4, 4, 4];

export const getFieldConfig = (brand: string): number[] => BRAND_FIELD_CONFIG[brand] ?? DEFAULT_FIELD_CONFIG;

export const decideBrandName = (number: string): string => {
  if (/^4/.test(number)) return "visa";
  if (/^5[1-5]/.test(number)) return "master";
  if (/^3[47]/.test(number)) return "amex";
  if (/^36/.test(number)) return "diners";
  if (/^(622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))|62[4-6]|628[2-8])/.test(number))
    return "unionpay";

  return "";
};

export const decideCardColor = (company: string) => {
  return COMPANY_COLOR_MAP.get(company) ?? "#333333";
};
