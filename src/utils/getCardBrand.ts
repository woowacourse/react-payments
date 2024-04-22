import { CARD_BRAND } from "../constants/cardInformation";
import Visa from "../static/Visa.png";
import Mastercard from "../static/Mastercard.png";

export const getCardBrandImg = (cardNumber: string) => {
  if (Number(cardNumber[0]) === CARD_BRAND.VISA) {
    return Visa;
  }

  if (
    Number(cardNumber.slice(0, 2)) >= CARD_BRAND.MASTER_START &&
    Number(cardNumber.slice(0, 2)) <= CARD_BRAND.MASTER_END
  ) {
    return Mastercard;
  }

  return "";
};
