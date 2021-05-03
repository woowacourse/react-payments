export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return { cards: state.cards.concat(action.card) };
    case 'EDIT_NICKNAME':
      const targetCard = state.cards.find((card) => card.id === action.id);
      targetCard.nickname = action.nickname;

      const newCards = state.cards.filter((card) => card.id !== action.id).concat(targetCard);

      return { cards: newCards };
    default:
      return state;
  }
}
