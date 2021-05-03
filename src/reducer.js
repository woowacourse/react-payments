export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return { cards: state.cards.concat(action.card) };
    default:
      return state;
  }
}
