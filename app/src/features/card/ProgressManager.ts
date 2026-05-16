import { CardInputChecker } from "./Checker";

interface CardFormData {
  cardNumber: string;
  cardBrand: string | null;
  cardExpiryDate: string;
  cardCVC: string;
  cardPassword: string;
}

interface CurrrentProgress {
  [key: string]: boolean;
}

const STEPS = [
  {
    nextStep: "cardBrandIsComplete",
    isComplete: ({ cardNumber }: CardFormData) =>
      CardInputChecker.isCardNumberComplete(cardNumber),
  },
  {
    nextStep: "cardExpiryDateIsComplete",
    isComplete: ({ cardBrand }: CardFormData) =>
      CardInputChecker.isCardBrandComplete(cardBrand),
  },
  {
    nextStep: "cardCVCIsComplete",
    isComplete: ({ cardExpiryDate }: CardFormData) =>
      CardInputChecker.isCardExpiryDateComplete(cardExpiryDate),
  },
  {
    nextStep: "cardPasswordIsComplete",
    isComplete: ({ cardCVC }: CardFormData) =>
      CardInputChecker.isCardCVCComplete(cardCVC),
  },
  {
    nextStep: "allComplete",
    isComplete: ({ cardPassword }: CardFormData) =>
      CardInputChecker.isCardPasswordComplete(cardPassword),
  },
];

export function calculateCreateCardCurrentProgress(cardFormData: CardFormData) {
  const currentProgress: CurrrentProgress = {
    cardNumberIsComplete: true,
    cardBrandIsComplete: false,
    cardExpiryDateIsComplete: false,
    cardCVCIsComplete: false,
    cardPasswordIsComplete: false,
    allComplete: false,
  };

  for (const { nextStep, isComplete } of STEPS) {
    if (!isComplete(cardFormData)) break;
    currentProgress[nextStep] = true;
  }

  return currentProgress;
}
