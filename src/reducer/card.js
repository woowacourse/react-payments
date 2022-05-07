const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      return {
        cards: state.cards.concat(action.card),
      };
    case 'SET_ALIAS':
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
