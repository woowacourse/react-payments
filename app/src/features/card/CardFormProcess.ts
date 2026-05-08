import { CardNetwork } from "./CardNetwork";

export const CardFormProgress = {
  isCardNumberComplete(fullCardNumber: string): boolean {
    const networkBrand = new CardNetwork(fullCardNumber);
    if (
      networkBrand.brand &&
      networkBrand.brand.length === fullCardNumber.replaceAll(" ", "").length
    ) {
      return true;
    }
  },
};
