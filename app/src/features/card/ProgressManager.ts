import { CardInputChecker } from "./Checker";

export function calculateCreateCardCurrentProgress(
  cardNumber: string,
  cardBrand: string | null,
  cardExpiryDate: string,
  cardCVC: string,
  cardPassword: string,
) {
  const currentProgress = {
    cardNumberIsComplete: true,
    cardBrandIsComplete: false,
    cardExpiryDateIsComplete: false,
    cardCVCIsComplete: false,
    cardPasswordIsComplete: false,
    allComplete: false,
  };
  if (!CardInputChecker.isCardNumberComplete(cardNumber))
    return currentProgress;
  currentProgress["cardBrandIsComplete"] = true;

  if (!CardInputChecker.isCardBrandComplete(cardBrand)) return currentProgress;
  currentProgress["cardExpiryDateIsComplete"] = true;

  if (!CardInputChecker.isCardExpiryDateComplete(cardExpiryDate))
    return currentProgress;
  currentProgress["cardCVCIsComplete"] = true;

  if (!CardInputChecker.isCardCVCComplete(cardCVC)) return currentProgress;
  currentProgress["cardPasswordIsComplete"] = true;

  if (!CardInputChecker.isCardPasswordComplete(cardPassword))
    return currentProgress;
  currentProgress["allComplete"] = true;

  return currentProgress;
}
