const CARD_ACTION = {
  ADD: 'CARD_ADD',
  NAME_EDIT: 'CARD_NAME_EDIT',
  DELETE: 'DELETE',
};

const initialCardData = [];

function CardReducer(state, action) {
  switch (action.type) {
    case CARD_ACTION.ADD:
      return state.concat(action.value);
    case CARD_ACTION.NAME_EDIT:
      return state.map(card => {
        if (card.cardNumber.value === action.targetCardNumber) {
          card.nickName = action.value;
          return card;
        }
        return card;
      });
    case CARD_ACTION.DELETE:
      return state.filter(card => {
        return card.cardNumber.value !== action.value;
      });
  }
}

export { CardReducer, initialCardData, CARD_ACTION };
