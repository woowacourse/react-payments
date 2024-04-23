import { CardIssuer } from '../hooks/useCardInfo';

interface CardListElement {
  issuer: CardIssuer;
  startingNumbers: string[];
}

const cardList: CardListElement[] = [
  { issuer: 'Visa', startingNumbers: ['4'] },
  { issuer: 'MasterCard', startingNumbers: ['51', '52', '53', '54', '55'] },
];

export const matchCardIssuer = (cardNumber: string) => {
  const matchedStartingNumber = (startingNumber: string) =>
    cardNumber.slice(0, startingNumber.length) === startingNumber;

  const hasStartingNumber = (startingNumbers: string[]) =>
    startingNumbers.some(matchedStartingNumber);

  const matchedCardInfo = cardList.find(object =>
    hasStartingNumber(object.startingNumbers)
  );

  return matchedCardInfo?.issuer ?? '';
};
