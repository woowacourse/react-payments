import { CARDLIST_FAILURE, CARDLIST_SUCCESS } from '../actions/cardDataAction';
import { CardType, actionName } from '../type';

export const initialState: CardType[] = [];
type Action = { type: actionName; card: CardType[]; errorMessage: string };

const cardReducer = (state: CardType[], action: Action) => {
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
