import API from "apis";
import React, { createContext, useEffect, useReducer } from "react";
import { CardInfo } from "types/cardInfo";

interface Context {
  cards: CardInfo[];
  addCard: (carInfo: CardInfo) => void;
  editCard: (id: number, partialCardInfo: Partial<CardInfo>) => void;
}

type CardsAction =
  | { type: "GET_CARD"; payload: CardInfo[] }
  | { type: "ADD_CARD"; payload: CardInfo }
  | { type: "EDIT_CARD"; payload: { id: number; partialCardInfo: Partial<CardInfo> } };

type CardsReducer = (state: CardInfo[], action: CardsAction) => CardInfo[];

const reducer: CardsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_CARD":
      return [...payload];

    case "ADD_CARD":
      return [...state, payload];

    case "EDIT_CARD":
      return state.map(card => {
        if (card.id === payload.id) {
          return { ...card, ...payload.partialCardInfo };
        }

        return card;
      });
  }
};

export const CardsContext = createContext<Context>(null);

const CardsProvider = ({ children }) => {
  const [cards, dispatch] = useReducer<CardsReducer>(reducer, []);

  useEffect(() => {
    (async function () {
      const data = await API.getCards();

      dispatch({ type: "GET_CARD", payload: data });
    })();
  }, []);

  const addCard = async (cardInfo: CardInfo) => {
    const cardInfoWIthId = { ...cardInfo, id: cards.length + 1 };

    dispatch({ type: "ADD_CARD", payload: cardInfoWIthId });

    await API.addCard(cardInfoWIthId);
  };

  const editCard = async (id: number, partialCardInfo: Partial<CardInfo>) => {
    dispatch({ type: "EDIT_CARD", payload: { id, partialCardInfo } });
    await API.editCard(id, partialCardInfo);
  };

  return (
    <CardsContext.Provider value={{ cards, addCard, editCard }}>{children}</CardsContext.Provider>
  );
};

export { CardsProvider };
