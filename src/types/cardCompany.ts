import { PALETTE } from 'styles/theme';

const COMPANY_COLORS = [
  PALETTE.RED_001,
  PALETTE.BLUE_001,
  PALETTE.GREEN_001,
  PALETTE.PINK_001,
  PALETTE.PINK_002,
  PALETTE.MINT_001,
  PALETTE.ORANGE_001,
  PALETTE.YELLOW_001,
] as const;

const COMPANY_NAMES = [
  '포코카드',
  '준카드',
  '공원카드',
  '브랜카드',
  '로이드카드',
  '도비카드',
  '콜린카드',
  '썬카드',
] as const;

export type CompanyName = typeof COMPANY_NAMES[number];
export type CompanyColor = typeof COMPANY_COLORS[number];

export interface CardCompany {
  name: CompanyName;
  color: CompanyColor;
}
