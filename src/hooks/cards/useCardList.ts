import { useEffect, useState } from 'react';
import { getLocalStorage, saveToLocalStorage } from '../../utils/localStorage';
import { Card } from '../../types';

const useCard = () => {
  const [cardList, setCardList] = useState<Card[]>(getLocalStorage() ?? []);

  const newCardId = (cardList.at(-1)?.id ?? 0) + 1;
  const newCard = cardList.at(-1);
  const cardListLength = cardList.length;

  useEffect(() => {
    saveToLocalStorage(cardList);
  }, [cardList]);

  const addCard = (newCard: Card) => {
    setCardList((cardList) => [...cardList, newCard]);
  };

  const updateCardName = (id: number, cardName: string) => {
    setCardList((cardList) => {
      return cardList.map((card) => {
        if (card.id === id) card.cardName = cardName;

        return card;
      });
    });
  };

  return { cardList, newCardId, newCard, cardListLength, addCard, updateCardName };
};

export { useCard };
