import { CARD } from '../constants/Condition';

export const isVisaCard = (cardNumbers: string[]) => {
  return Number(cardNumbers[0].charAt(0)) === CARD.VISA;
};

export const isMasterCard = (cardNumbers: string[]) => {
  return (
    Number(cardNumbers[0].slice(0, 2)) >= CARD.MIN_MASTER_CARD &&
    Number(cardNumbers[0].slice(0, 2)) <= CARD.MAX_MASTER_CARD
  );
};
