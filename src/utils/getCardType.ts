type CardType = 'VISA' | 'MASTER' | 'NORMAL';

export function getCardType(firstCardNumberUnit: string): CardType {
  if (isVisaCard(firstCardNumberUnit)) return 'VISA';
  if (isMasterCard(firstCardNumberUnit)) return 'MASTER';
  return 'NORMAL';
}

const isVisaCard = (firstCardNumberUnit: string) => {
  return firstCardNumberUnit.startsWith('4');
};

const isMasterCard = (firstCardNumberUnit: string) => {
  const startTwoNumber = Number(firstCardNumberUnit.slice(0, 2));

  return startTwoNumber >= 51 && startTwoNumber <= 55;
};
