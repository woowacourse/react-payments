import type { CardNumber, CardPassword, CardType } from '../type';

export const postLocalStorage = (data: Omit<CardType, 'id'>) => {
  const getData = localStorage.getItem('cardList');
  if (!getData) {
    localStorage.setItem('cardList', JSON.stringify([data]));
    return;
  }

  const dataToArr = JSON.parse(getData);

  // eslint-disable-next-line array-callback-return
  const sameNumbers = dataToArr.filter((card: Omit<CardType, 'id'>) => {
    const { cardNumber } = card;
    const keys = Object.keys(cardNumber) as ('first' | 'second' | 'third' | 'fourth')[];
    let cardNumberSerial = '';
    let fetchCardNumberSerial = '';
    for (const key of keys) {
      cardNumberSerial += cardNumber[key];
      fetchCardNumberSerial += data.cardNumber[key];
    }

    if (cardNumberSerial.includes(fetchCardNumberSerial)) return true;
  });

  if (sameNumbers.length > 0) throw new Error('이미 등록된 카드');
  dataToArr.push(data);
  localStorage.setItem('cardList', JSON.stringify(dataToArr));
};

export const sumbitCard = (
  cardType: string,
  cardNumber: CardNumber,
  cardOwner: string,
  cardExpire: string,
  securityCode: string,
  cardPassword: CardPassword
) => {
  const postData: Omit<CardType, 'id'> = {
    cardType,
    cardNumber,
    cardOwner,
    expired: cardExpire,
    securityCode,
    cardPassword: {
      first: cardPassword.first,
      second: cardPassword.second,
    },
  };
  try {
    postLocalStorage(postData);
  } catch (err) {
    throw new Error('Fail POST LocalStorage');
  }
};
