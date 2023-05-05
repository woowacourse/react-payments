import type { CardNumber, CardType } from '../type';

// TODO: reducer 구현
export const getSerialNumber = (card: CardNumber): string => {
  let result = '';
  const keys = Object.keys(card) as ('first' | 'second' | 'third' | 'fourth')[];
  for (const key of keys) {
    result += card[key];
  }

  return result;
};

export const newCardList = (recentList: CardType[], data: Omit<CardType, 'id'>) => {
  if (recentList.length === 0) {
    return JSON.stringify([{ id: 0, ...data }]);
  }

  const sameNumbers = recentList.filter((card: Omit<CardType, 'id'>) => {
    const { cardNumber } = card;
    const cardNumberSerial = getSerialNumber(cardNumber);
    const fetchCardNumberSerial = getSerialNumber(data.cardNumber);

    if (cardNumberSerial.includes(fetchCardNumberSerial)) return true;
    return false;
  });

  if (sameNumbers.length > 0) throw new Error('이미 등록된 카드');
  recentList.push({ id: recentList.length, ...data });
  return JSON.stringify(recentList);
};

export const registerCardAlias = (cardList: CardType[], alias: string, cardNumber: CardNumber) => {
  const registerdCardNumber = getSerialNumber(cardNumber);
  const currentCard = cardList.find(
    (card) => getSerialNumber(card.cardNumber) === registerdCardNumber
  );

  const addedAliasCard = { alias, ...currentCard };

  const restCardList = cardList.filter(
    (card) => getSerialNumber(card.cardNumber) !== registerdCardNumber
  );

  const newCardList = [...restCardList, addedAliasCard];

  return JSON.stringify(newCardList);
};
