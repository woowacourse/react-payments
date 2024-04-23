import { CARD_COMPANIES } from "../constants/cardInformation";
import theme from "../styles/theme";

export const getCompanyColor = (company: string) => {
  if (company === CARD_COMPANIES.BC_CARD.name) {
    return CARD_COMPANIES.BC_CARD.color;
  }
  if (company === CARD_COMPANIES.SHINHAN_CARD.name) {
    return CARD_COMPANIES.SHINHAN_CARD.color;
  }
  if (company === CARD_COMPANIES.KAKAOBANK_CARD.name) {
    return CARD_COMPANIES.KAKAOBANK_CARD.color;
  }
  if (company === CARD_COMPANIES.HYUNDAIC_CARD.name) {
    return CARD_COMPANIES.HYUNDAIC_CARD.color;
  }
  if (company === CARD_COMPANIES.WOORI_CARD.name) {
    return CARD_COMPANIES.WOORI_CARD.color;
  }
  if (company === CARD_COMPANIES.LOTTE_CARD.name) {
    return CARD_COMPANIES.LOTTE_CARD.color;
  }
  if (company === CARD_COMPANIES.HANA_CARD.name) {
    return CARD_COMPANIES.HANA_CARD.color;
  }
  if (company === CARD_COMPANIES.KOOKMIN_CARD.name) {
    return CARD_COMPANIES.KOOKMIN_CARD.color;
  }
  return theme.cardThemeColor.default;
};
