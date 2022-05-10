const initialState = {
  card: {},
  cardList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_CARD_INFO':
      return {
        ...state,
        card: action.card,
      };
    case 'ADD_CARD_TO_LIST':
      return {
        card: {},
        cardList: state.cardList.concat({
          ...state.card,
          cardName: action.cardName,
        }),
      };
    default:
      return state;
  }
};

export { initialState, reducer };
