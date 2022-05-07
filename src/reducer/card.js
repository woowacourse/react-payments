import { ACTION } from 'constants';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.CREATE_CARD:
      return {
        cards: state.cards.concat(action.card),
      };
    case ACTION.SET_ALIAS:
      return {
        cards: state.cards.map((card) =>
          card.id === action.id ? { ...card, alias: action.alias } : card,
        ),
      };
    default:
      return state;
  }
};

export default reducer;
