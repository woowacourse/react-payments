import { CardType, actionName } from '../type';
import { fetchNewCardData } from '../utils/fetchData';

export const CARDLIST_SUCCESS: actionName = 'CARDLIST_SUCCESS';
export const CARDLIST_FAILURE: actionName = 'CARDLIST_FAILURE';
export const ADD_CARD_REQUEST: actionName = 'ADD_CARD_REQUEST';
export const ADD_CARD_SUCCESS: actionName = 'ADD_CARD_SUCCESS';
export const ADD_CARD_FAILURE: actionName = 'ADD_CARD_FAILURE';
export const ADD_CARD_DUPLICATED: actionName = 'ADD_CARD_DUPLICATED';

export const getCardListAction = () => {
  const cardList = JSON.parse(localStorage.getItem('cardList') ?? '[]');

  if (cardList.length) {
    return {
      type: CARDLIST_SUCCESS,
      card: cardList as CardType[],
      errorMessage: '',
    };
  }
  return {
    type: CARDLIST_FAILURE,
    card: [],
    errorMessage: '카드 목록이 존재하지 않습니다!',
  };
};

export const addCardRequestStartAction = () => {
  return {
    type: ADD_CARD_REQUEST,
    isLoading: true,
    errorMessage: '',
  };
};

export const addCardAction = (data: CardType) => {
  const failureRandom80 = Math.floor(Math.random() * 10);
  console.log(failureRandom80);
  const returnData: any = [];

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  if (failureRandom80 > 1) {
    fetchNewCardData(data);
    returnData[0] = {
      type: ADD_CARD_SUCCESS,
      isLoading: false,
      errorMessage: '',
    };
  } else {
    returnData[0] = {
      type: ADD_CARD_FAILURE,
      isLoading: false,
      errorMessage: '',
    };
  }

  return returnData[0];
};
