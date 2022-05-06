import { useReducer } from 'react';

const initialCardData = { cards: [] };

const CARD_ACTION = {
  ADD: 'CARD_ADD',
  NAME_EDIT: 'CARD_NAME_EDIT',
};

function CardReducer(state, action) {
  switch (action.type) {
    case CARD_ACTION.ADD:
      return {
        cards: state.cards.concat(action.newCard),
      };
    case CARD_ACTION.NAME_EDIT:
      return;
  }
}

const [cardData, cardDispatch] = useReducer(initialCardData, CardReducer);

export { cardData, cardDispatch };
