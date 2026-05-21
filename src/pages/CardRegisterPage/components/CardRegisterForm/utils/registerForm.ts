import { getCardBrandName } from "../../../../../domain/card/cardBrand";
import type { CardRegisterInputInformation } from "../../../cardRegisterInputInformation.types";
import { UNLOCKED_STEP } from "../constants";
import { validateCardNumber } from "./cardNumberValidator";
import { validateExpiryMonth, validateExpiryYear } from "./expiryDateValidator";
import { validateIssuer } from "./issuerValidator";

export const getInitialMaxUnlockedStep = (
  cardInfo: CardRegisterInputInformation,
) => {
  const cardBrand = getCardBrandName(cardInfo.cardNumbers);

  if (!validateCardNumber(cardInfo.cardNumbers.join(""), cardBrand).isValid) {
    return UNLOCKED_STEP.CARD_NUMBER;
  }

  if (!validateIssuer(cardInfo.selectedIssuer).isValid) {
    return UNLOCKED_STEP.ISSUER;
  }

  if (
    !validateExpiryMonth(cardInfo.expiryMonth).isValid ||
    !validateExpiryYear(cardInfo.expiryYear).isValid
  ) {
    return UNLOCKED_STEP.EXPIRY;
  }

  return UNLOCKED_STEP.CVC;
};
