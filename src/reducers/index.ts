import { Action, State } from 'types';

import { cardActionTypes } from 'actions';

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
    case cardActionTypes.SAVE_CARD_INFO:
      return {
        ...state,
        card: action.payload,
      };
    case cardActionTypes.ADD_CARD_TO_LIST:
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
