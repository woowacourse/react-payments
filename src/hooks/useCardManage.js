import { useState } from 'react';
import { getCardId, getCardNickName } from '../utils/getCardInfo';

const registeredCards = {};

export const useCardManage = () => {
  const [cards, setCards] = useState(registeredCards);
  const [cardId, setCardId] = useState(null);

  const registerCard = (card) => {
    const cardId = getCardId();
    const nickName = getCardNickName(card.company, card.owner);

    setCards((cards) => ({ ...cards, [cardId]: { ...card, nickName } }));
    setCardId(cardId);
  };

  const updateCard = (nickName) => {
    const card = cards[cardId];

    setCards((cards) => ({ ...cards, [cardId]: { ...card, nickName } }));
    setCardId(null);
  };

  const deleteCard = () => {
    setCards((cards) => {
      delete cards[cardId];

      return { ...cards };
    });
    setCardId(null);
  };

  return { cards, cardId, setCardId, registerCard, updateCard, deleteCard };
};
