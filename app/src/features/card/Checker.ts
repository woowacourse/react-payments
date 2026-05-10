type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};
import { CardNetwork } from "./CardNetwork";

export const CreateCardInputChecker = {
  isCardNumberComplete(cardNumber: CardNumber) {
    const fullNumber = Object.values(cardNumber).join("");
    const networkBrand = new CardNetwork(fullNumber);
    return networkBrand.brand?.length === fullNumber.length;
  },
};
