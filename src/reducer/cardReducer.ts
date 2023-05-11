import {
  ADD_CARD_DUPLICATED,
  ADD_CARD_FAILURE,
  ADD_CARD_REQUEST,
  ADD_CARD_SUCCESS,
  CARDLIST_FAILURE,
  CARDLIST_SUCCESS,
} from '../actions/cardDataAction';
import { CardType, actionName } from '../type';

export const cardListInitialState: CardType[] = [];
type cardListAction = { type: actionName; card: CardType[]; errorMessage: string };

export const cardListReducer = (state: CardType[], action: cardListAction) => {
  switch (action.type) {
    case CARDLIST_SUCCESS:
      return [...state, ...action.card];

    case CARDLIST_FAILURE:
      return [...state];

    default:
      return state;
  }
};

type cardAddAction = { type: actionName; isLoading: boolean; errorMessage: string };

export const cardAddReducer = (state: any, action: cardAddAction) => {
  switch (action.type) {
    case ADD_CARD_REQUEST:
      return {
        type: ADD_CARD_REQUEST,
        isLoading: true,
        errorMessage: '',
      };

    case ADD_CARD_SUCCESS:
      return {
        type: ADD_CARD_SUCCESS,
        isLoading: false,
        errorMessage: '',
      };

    case ADD_CARD_FAILURE:
      return {
        type: ADD_CARD_FAILURE,
        isLoading: false,
        errorMessage: '알 수 없는 오류가 발생했습니다!',
      };

    case ADD_CARD_DUPLICATED:
      return {
        type: ADD_CARD_FAILURE,
        isLoading: false,
        errorMessage: '동일한 카드가 존재합니다! 다시 입력해주세요.',
      };

    default:
      return {
        type: ADD_CARD_FAILURE,
        isLoading: false,
        errorMessage: '알 수 없는 오류가 발생했습니다!',
      };
  }
};
