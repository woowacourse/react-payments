import { BRANDS } from "../constants";

export interface CardType {
  numbers: string;
  expiryDate: string;
  owner?: string;
  brand?: BrandType;
  CVC: number;
  password: number[];
  alias?: string;
}

export type BrandType = (typeof BRANDS)[number];
