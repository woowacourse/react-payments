import { detectCardNetwork } from "./CardNetwork";
import { CARD_INPUT } from "./Constants";

export const CardInputChecker = {
  isCardNumberComplete(cardNumber: string): boolean {
    const networkBrand = detectCardNetwork(cardNumber);
    return networkBrand?.length === cardNumber.length;
  },

  isCardBrandComplete(value: string): boolean {
    return Boolean(value);
  },

  isCardExpiryDateComplete(cardExpiryDate: string): boolean {
    if (cardExpiryDate.length === CARD_INPUT.EACH_EXPIRY_DATE_LENGTH * 2) {
      return true;
    }
  },

  isCardCVCComplete(cardCVC: string): boolean {
    if (cardCVC.length === CARD_INPUT.CVC_LENGTH) return true;
  },

  isCardPasswordComplete(password: string): boolean {
    if (password.length === CARD_INPUT.PASSWORD_LENGTH) return true;
  },
};
