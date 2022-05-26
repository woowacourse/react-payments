import { Action, State } from 'types';

const initialState: State = {
  card: {
    cardColor: '#D2D2D2',
    cardCompany: '',
    cardName: '',
    cardOwnerName: '',
    cardNumber: '',
    cardCVC: '',
    cardPassword: '',
    validDate: '',
  },
  cardList: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SAVE_CARD_INFO':
      return {
        ...state,
        card: action.payload,
      };
    case 'ADD_CARD_TO_LIST':
      return {
        card: {},
        cardList: state.cardList.concat({
          ...state.card,
          cardName: action.payload,
        }),
      };
    default:
      return state;
  }
};

export { initialState, reducer };
