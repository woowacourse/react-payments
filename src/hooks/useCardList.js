import { useEffect, useReducer } from 'react';
import { isJSONArray } from '../utils/util';

const defaultCardList = isJSONArray(localStorage.getItem('cardList'))
  ? JSON.parse(localStorage.getItem('cardList'))
  : [];

const cardListReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_CARD': {
      const { id, cardInput } = payload;

      return [
        ...state,
        {
          id,
          alias: '',
          ...cardInput,
        },
      ];
    }

    case 'CHANGE_ALIAS': {
      const { alias, id } = payload;

      return state.map(card => {
        if (card.id === id) {
          return { ...card, alias };
        }
        return card;
      });
    }

    case 'UPDATE_CARD': {
      const { id, cardInput } = payload;

      return state.map(card => {
        if (card.id === id) {
          return { ...card, id, ...cardInput };
        }
        return card;
      });
    }
  }
};

export const useCardList = () => {
  const [cardList, cardListDispatch] = useReducer(cardListReducer, defaultCardList);

  useEffect(() => {
    localStorage.setItem('cardList', JSON.stringify(cardList));
  }, [cardList]);

  return [cardList, cardListDispatch];
};
