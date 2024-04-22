import { visaCard } from "../../assets/image";
import { masterCard } from "../../assets/image";
import { CARD_NUMBER } from "../../constants/card-app";

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

export const decideCardLogo = (cardNumber: string) => {
  if (isVisaCard(cardNumber)) return visaCard;

  if (isMasterCard(cardNumber)) return masterCard;

  return null;
};
