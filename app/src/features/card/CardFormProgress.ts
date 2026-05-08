import { CardNetwork } from "./CardNetwork";

const CardFormProgress = {
  isCardNumberComplete(fullCardNumber: string): boolean {
    const networkBrand = new CardNetwork(fullCardNumber);
    if (
      networkBrand.brand &&
      networkBrand.brand.length === fullCardNumber.replaceAll(" ", "").length
    ) {
      return true;
    }
  },

  isCardBrandComplete(value: string) {
    if (value) return true;
  },
};

export default CardFormProgress;
