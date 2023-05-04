import { CardType, actionName } from '../type';

export const CARDLIST_SUCCESS: actionName = 'CARDLIST_SUCCESS';
export const CARDLIST_FAILURE: actionName = 'CARDLIST_FAILURE';

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

export const cardAddAction = () => {
  // asdfasdfadsfadsdasfds
};
