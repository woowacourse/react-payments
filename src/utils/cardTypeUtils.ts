import { CARD_TYPE } from '../constants';
import { CardNumber } from '../../types/types';

export const isMasterCard = (cardNumber: number | null): boolean => {
  if (!cardNumber) return false;

  const cardNumberStr = cardNumber.toString();
  return CARD_TYPE.masterCard.startsWith.some((prefix) =>
    cardNumberStr.startsWith(prefix)
  );
};

export const isVisaCard = (cardNumber: number | null): boolean => {
  if (!cardNumber) return false;

  const cardNumberStr = cardNumber.toString();
  return cardNumberStr.startsWith(CARD_TYPE.visa.startsWith);
};

export const identifyCardType = (cardNumber: CardNumber) => {
  const { first } = cardNumber;

  if (isMasterCard(first)) return 'mastercard';
  if (isVisaCard(first)) return 'visa';

  return null;
};
