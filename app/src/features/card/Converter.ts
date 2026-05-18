import { CARD_BRAND } from "./Constants";

export const convertCardBrandToIssuerCode = (cardBrand: string) => {
  if (Object.keys(CARD_BRAND).includes(cardBrand)) {
    return CARD_BRAND[cardBrand].code;
  }
};
