import type { CardNumber, CardType } from '../type';

export const getSerialNumber = (card: CardNumber): string => {
  let result = '';
  const keys = Object.keys(card) as ('first' | 'second' | 'third' | 'fourth')[];
  for (const key of keys) {
    result += card[key];
  }

  return result;
};

export const postLocalStorage = (data: Omit<CardType, 'id'>) => {
  const getData = localStorage.getItem('cardList');

  if (!getData) {
    localStorage.setItem('cardList', JSON.stringify([{ id: 0, ...data }]));
    return;
  }

  const dataToArr = JSON.parse(getData);

  const sameNumbers = dataToArr.filter((card: Omit<CardType, 'id'>) => {
    const { cardNumber } = card;
    let cardNumberSerial = getSerialNumber(cardNumber);
    let fetchCardNumberSerial = getSerialNumber(data.cardNumber);

    if (cardNumberSerial.includes(fetchCardNumberSerial)) return true;
    return false;
  });

  if (sameNumbers.length > 0) throw new Error('이미 등록된 카드');
  dataToArr.push({ id: dataToArr.length, ...data });
  localStorage.setItem('cardList', JSON.stringify(dataToArr));
};

export const fetchLocalStorage = (key: string, initial = '') => {
  return JSON.parse(localStorage.getItem('cardList') ?? initial);
};

export const registerCardAlias = (alias: string, cardNumber: CardNumber) => {
  const registerdCardNumber = getSerialNumber(cardNumber);
  const cardList = fetchLocalStorage('cardList', '[]');
  const currentCard = cardList.find(
    (card: CardType) => getSerialNumber(card.cardNumber) === registerdCardNumber
  );

  const addedAliasCard = { alias, ...currentCard };

  const restCardList = cardList.filter(
    (card: CardType) => getSerialNumber(card.cardNumber) !== registerdCardNumber
  );

  const newCardList = [...restCardList, addedAliasCard];

  localStorage.setItem('cardList', JSON.stringify(newCardList));
};
