import API from "apis";
import React, { createContext, useEffect, useState } from "react";
import { CardInfo } from "types/cardInfo";

interface Context {
  cards: CardInfo[];
  setCards: React.Dispatch<React.SetStateAction<CardInfo[]>>;
  addCard: (carInfo: CardInfo) => void;
  editCard: (id: number, partialCardInfo: Partial<CardInfo>) => void;
}

export const CardsContext = createContext<Context>(null);

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState<CardInfo[]>([]);

  useEffect(() => {
    (async function () {
      const data = await API.getCards();

      setCards(data);
    })();
  }, []);

  const addCard = async (cardInfo: CardInfo) => {
    const cardInfoWIthId = { ...cardInfo, id: cards.length + 1 };

    setCards(cards => [...cards, cardInfoWIthId]);

    await API.addCard(cardInfoWIthId);
  };

  const editCard = async (id: number, partialCardInfo: Partial<CardInfo>) => {
    const payload = cards.map(card => {
      if (card.id === id) {
        return { ...card, ...partialCardInfo };
      }

      return card;
    });

    setCards(payload);
    await API.editCard(id, partialCardInfo);
  };

  return (
    <CardsContext.Provider value={{ cards, setCards, addCard, editCard }}>
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider };
