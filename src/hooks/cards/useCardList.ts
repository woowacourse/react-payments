import { useCallback, useEffect, useState } from 'react';
import type { Card } from '../../types';
import { CARD_LIST_LOCAL_STORAGE_KEY } from '../../constants';
import { getLocalStorage, saveToLocalStorage } from '../../utils/localStorage';

const useCard = () => {
  const [cardList, setCardList] = useState<Card[]>(
    getLocalStorage(CARD_LIST_LOCAL_STORAGE_KEY) ?? []
  );

  const newCardId = (cardList.at(-1)?.id ?? 0) + 1;
  const cardListLength = cardList.length;

  useEffect(() => {
    saveToLocalStorage(CARD_LIST_LOCAL_STORAGE_KEY, cardList);
  }, [cardList]);

  const addCard = (newCard: Card) => {
    setCardList((prevCardList) => [...prevCardList, newCard]);
  };

  const getCardById = useCallback(
    (id: number) => {
      return cardList.find((card) => card.id === id) ?? null;
    },
    [cardList]
  );

  const updateCardName = (id: number, cardName: string) => {
    setCardList((prevCardList) => {
      return prevCardList.map((card) => {
        if (card.id === id) card.cardName = cardName;

        return card;
      });
    });
  };

  return { cardList, newCardId, cardListLength, addCard, getCardById, updateCardName };
};

export { useCard };
