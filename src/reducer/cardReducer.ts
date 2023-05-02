import { CARDLIST_FAILURE, CARDLIST_SUCCESS } from '../actions/cardDataAction';
import { CardType } from '../type';

export const initialState: CardType[] = [];

const cardReducer = (state: CardType[], action: any) => {
  switch (action.type) {
    case CARDLIST_SUCCESS:
      return [...state, ...action.card];

    case CARDLIST_FAILURE:
      return [...state];

    default:
      return state;
  }
};

export default cardReducer;
