export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return { cards: state.cards.concat(action.card) };
    case 'EDIT_NICKNAME':
      return {
        cards: state.cards.map((card) => {
          if (card.id === action.id) {
            card.nickname = action.nickname;
          }

          return card;
        }),
      };
    default:
      return state;
  }
}
