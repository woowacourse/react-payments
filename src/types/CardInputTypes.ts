import type { cardBrandsColors } from '../constants/cardConstants';

export interface CardInputProps {
  first: number | null;
  second: number | null;
  third: number | null;
  fourth: number | null;
  MM: number | null;
  YY: number | null;
  CVC: number | null;
  password: number | null;
  cardBrand: keyof typeof cardBrandsColors | null;
}
