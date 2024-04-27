import { validateCardNumbersInputCompleted } from "../../validators/cardAddFormValidator";

import { visaCard } from "../../assets/image";
import { masterCard } from "../../assets/image";

import { CARD_NUMBER } from "../../constants/card-app";

import { CardNumberKeys } from "../../types/card";

const isVisaCard = (cardNumber: string) => {
  return parseInt(cardNumber[0], 10) === CARD_NUMBER.visaStartNumber;
};

const isMasterCard = (cardNumber: string) => {
  if (cardNumber.length < 2) return false;

  const slicedCardNumber = parseInt(cardNumber.slice(0, 2), 10);

  return (
    slicedCardNumber >= CARD_NUMBER.minMasterNumber &&
    slicedCardNumber <= CARD_NUMBER.maxMasterNumber
  );
};

export const decideCardLogo = (value: Record<CardNumberKeys, string>) => {
  if (!validateCardNumbersInputCompleted(value)) return null;

  if (isVisaCard(value.first)) return visaCard;

  if (isMasterCard(value.first)) return masterCard;

  return null;
};
