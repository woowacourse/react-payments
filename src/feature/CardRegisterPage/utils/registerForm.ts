import type { CardInfoType } from "../../../shared/types/CardInfoType";
import { CARD_FORM } from "../constants";
import { validateCardCompany } from "../validators/cardCompany";
import { validateCardNumber } from "../validators/cardNumber";
import {
  validateExpiryMonth,
  validateExpiryYear,
} from "../validators/expiryDate";
import { getCardBrandName } from "./cardBrand";

export const getInitialMaxUnlockedStep = (cardInfo: CardInfoType) => {
  const cardBrand = getCardBrandName(cardInfo.cardNumbers);

  if (!validateCardNumber(cardInfo.cardNumbers.join(""), cardBrand).isValid) {
    return CARD_FORM.RENDER_STEP.CARD_NUMBER;
  }

  if (!validateCardCompany(cardInfo.selectedCardCompany).isValid) {
    return CARD_FORM.RENDER_STEP.CARD_COMPANY;
  }

  if (
    !validateExpiryMonth(cardInfo.expiryMonth).isValid ||
    !validateExpiryYear(cardInfo.expiryYear).isValid
  ) {
    return CARD_FORM.RENDER_STEP.EXPIRY;
  }

  return CARD_FORM.RENDER_STEP.CVC;
};
