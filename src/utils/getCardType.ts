type CardType = 'Visa' | 'Mastercard' | 'Normal';

export function getCardType(firstCardNumberUnit: string): CardType {
  if (isVisaCard(firstCardNumberUnit)) return 'Visa';
  if (isMasterCard(firstCardNumberUnit)) return 'Mastercard';
  return 'Normal';
}

const isVisaCard = (firstCardNumberUnit: string) => {
  return firstCardNumberUnit.startsWith('4');
};

const isMasterCard = (firstCardNumberUnit: string) => {
  const startTwoNumber = Number(firstCardNumberUnit.slice(0, 2));

  return startTwoNumber >= 51 && startTwoNumber <= 55;
};
