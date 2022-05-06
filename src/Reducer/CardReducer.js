const CARD_ACTION = {
  ADD: 'CARD_ADD',
  NAME_EDIT: 'CARD_NAME_EDIT',
};

const initialCardData = { cards: [] };

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

export { CardReducer, initialCardData, CARD_ACTION };
