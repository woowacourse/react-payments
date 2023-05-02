import { CardNumber, CardType } from '../../type';
import { fetchLocalStorage, getSerialNumber } from '../../utils/applicationStorage';

const registerCardAlias = (alias: string, cardNumber: CardNumber) => {
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

export default registerCardAlias;
