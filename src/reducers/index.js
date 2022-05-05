import { createContext } from 'react';

const CardContext = createContext(null);

const initialState = {
  card: {},
  cards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_CARD':
      return {
        ...state,
        card: action.card,
      };
    case 'ADD_CARD':
      return {
        card: {},
        cards: state.cards.concat({ ...state.card, cardName: action.cardName }),
      };
    default:
      return state;
  }
};

export { CardContext, initialState, reducer };
