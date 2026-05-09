import { CardNetwork } from "./CardNetwork";

type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

type CardExpiryDate = {
  "expiry-year": string;
  "expiry-month": string;
};

export const CreateCardProgressManager = {
  progress: {
    cardNumber: true,
    cardBrand: false,
    cardExpiryDate: false,
    cardCVC: false,
    cardPassword: false,
    complete: false,
  },

  calculateCurrentProgress(
    cardNumber: CardNumber,
    cardBrand: string,
    cardExpiryDate: CardExpiryDate,
    cardCVC: string,
    cardPassword: string,
  ) {
    const currentProgress = { ...this.progress };
    if (!this.isCardNumberComplete(cardNumber)) return currentProgress;
    currentProgress["cardBrand"] = true;

    if (!this.isCardBrandComplete(cardBrand)) return currentProgress;
    currentProgress["cardExpiryDate"] = true;

    if (!this.isCardExpiryDateComplete(cardExpiryDate)) return currentProgress;
    currentProgress["cardCVC"] = true;

    if (!this.isCardCVCComplete(cardCVC)) return currentProgress;
    currentProgress["cardPassword"] = true;

    if (!this.isCardPasswordComplete(cardPassword)) return currentProgress;
    currentProgress["complete"] = true;

    return currentProgress;
  },

  isCardNumberComplete(cardNumber: CardNumber): boolean {
    const fullNumber = Object.values(cardNumber).join("");
    const networkBrand = new CardNetwork(fullNumber);
    return networkBrand.brand?.length === fullNumber.length;
  },

  isCardBrandComplete(value: string): boolean {
    return Boolean(value);
  },

  isCardExpiryDateComplete(cardExpiryDate: CardExpiryDate): boolean {
    if (
      cardExpiryDate["expiry-year"].length === 2 &&
      cardExpiryDate["expiry-month"].length === 2
    ) {
      return true;
    }
  },

  isCardCVCComplete(cardCVC: string): boolean {
    if (cardCVC.length === 3) return true;
  },

  isCardPasswordComplete(password: string): boolean {
    if (password.length === 2) return true;
  },
};
