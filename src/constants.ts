import { BrandType } from "./types/card";

export const NUMBER_REGEX = /\d/g;
export const TWO_TO_NINE_REGEX = /[^2-9]/g;
export const CARDNUMBERS_REGEX = /\d{1,4}|●{1,4}/g;
export const EXPRIYDATE_REGEX = /\d{1,2}/g;

export const CARDNUMBERS_MAXLEGNTH = 16;
export const EXPRIYDATE_MAXLEGNTH = 4;
export const NAME_MAXLEGNTH = 30;
export const CVC_MAXLEGNTH = 3;
export const PASSWORD_MAXLEGNTH = 1;

export const DEFAULT_NAME = "NAME";
export const DEFAULT_EXPRIYDATE = "MM / YY";
export const DEFAULT_BRAND = "";

export const BRANDS = [
  "현대카드",
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "하나카드",
  "우리카드",
  "KB카드",
  "롯데카드",
] as const;

export const BACKGROUND_COLORMAP: Record<BrandType | typeof DEFAULT_BRAND, string> = {
  현대카드: "#000000",
  BC카드: "#fc6d62",
  신한카드: "#4a7cff",
  카카오뱅크: "#ffed45",
  하나카드: "#1db8b3",
  우리카드: "#1994e0",
  KB카드: "#8c8176",
  롯데카드: "#f25769",
  [DEFAULT_BRAND]: "#000000",
} as const;

export const FONT_COLORMAP: Record<BrandType | typeof DEFAULT_BRAND, string> = {
  현대카드: "#FFFFFF",
  BC카드: "#FFFFFF",
  신한카드: "#FFFFFF",
  카카오뱅크: "#786b5f",
  하나카드: "#FFFFFF",
  우리카드: "#FFFFFF",
  KB카드: "#FFFFFF",
  롯데카드: "#FFFFFF",
  [DEFAULT_BRAND]: "#FFFFFF",
} as const;
