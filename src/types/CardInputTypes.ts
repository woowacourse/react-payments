import type { cardBrandsColors } from '../constants/cardConstants';

export interface CardInputProps {
  first: string;
  second: string;
  third: string;
  fourth: string;
  MM: string;
  YY: string;
  CVC: string;
  password: string;
  cardBrand: keyof typeof cardBrandsColors;
}
