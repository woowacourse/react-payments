import API from "apis";
import React, { createContext, useEffect, useState } from "react";
import { CardInfo } from "types/cardInfo";

interface Context {
  cards: CardInfo[];
  setCards: React.Dispatch<React.SetStateAction<CardInfo[]>>;
  addCard: (carInfo: CardInfo) => void;
  editCard: (id: number) => void;
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

    await API.addCard(cardInfoWIthId);

    setCards(cards => [...cards, cardInfoWIthId]);
  };

  const editCard = async (id: number) => {
    const target = cards.find(card => card.id === id);
    const { cardName } = target;

    const payload = cards.map(card => {
      if (card.id === id) {
        return { ...card, cardName };
      }

      return card;
    });

    await API.editCard(id, { cardName });

    setCards(payload);
  };

  return (
    <CardsContext.Provider value={{ cards, setCards, addCard, editCard }}>
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider };
