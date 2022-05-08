import API from "apis";
import { useEffect, useReducer, useState } from "react";
import { CardInfoWithCardName } from "types/cardInfo";

import useAsyncError from "./useAsyncError";

type CardsAction =
  | { type: "GET_CARD"; payload: CardInfoWithCardName[] }
  | { type: "ADD_CARD"; payload: CardInfoWithCardName }
  | { type: "EDIT_CARD"; payload: { id: number; partialCardInfo: Partial<CardInfoWithCardName> } };

type CardsReducer = (state: CardInfoWithCardName[], action: CardsAction) => CardInfoWithCardName[];

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

function useCards() {
  const [cards, dispatch] = useReducer<CardsReducer>(reducer, []);
  const throwError = useAsyncError();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ isError: false, errorMessage: null });

  const showErrorMessage = (message: string) => {
    setError({ isError: true, errorMessage: message });
    setTimeout(() => {
      setError({ isError: false, errorMessage: null });
    }, 3000);
  };

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const data = await API.getCards();

        setIsLoading(false);

        dispatch({ type: "GET_CARD", payload: data });
      } catch ({ message }) {
        throwError(new Error(message));
      }
    })();
  }, []);

  const addCard = async (cardInfo: CardInfoWithCardName) => {
    const cardInfoWIthId = { ...cardInfo, id: cards.length + 1 };

    try {
      setIsLoading(true);
      await API.addCard(cardInfoWIthId);
      setIsLoading(false);
      dispatch({ type: "ADD_CARD", payload: cardInfoWIthId });
    } catch ({ message }) {
      showErrorMessage(message);
    }
  };

  const editCard = async (id: number, partialCardInfo: Partial<CardInfoWithCardName>) => {
    try {
      setIsLoading(true);
      await API.editCard(id, partialCardInfo);
      setIsLoading(false);
      dispatch({ type: "EDIT_CARD", payload: { id, partialCardInfo } });
    } catch ({ message }) {
      showErrorMessage(message);
    }
  };

  return {
    cards,
    addCard,
    editCard,
    error,
    isLoading,
  };
}

export default useCards;
