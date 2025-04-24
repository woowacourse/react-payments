import VisaCardImage from "@assets/icons/visa-card.svg";
import MasterCardImage from "@assets/icons/master-card.svg";
import { OverseaCardBrand } from "../types";
export const CARD_BRAND_IMAGES: Record<OverseaCardBrand, string> = {
  VISA: VisaCardImage,
  MASTERCARD: MasterCardImage,
  DEFAULT: "",
};
