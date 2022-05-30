import { Action, CardType } from 'types';

const cardActionTypes = {
  SAVE_CARD_INFO: 'SAVE_CARD_INFO',
  ADD_CARD_TO_LIST: 'ADD_CARD_TO_LIST',
};

const actions = {
  saveCardInfo: (card: CardType): Action => {
    return { type: cardActionTypes.SAVE_CARD_INFO, payload: card };
  },
  addCardToList: (cardName: CardType['cardName']): Action => {
    return { type: cardActionTypes.ADD_CARD_TO_LIST, payload: cardName };
  },
};

export { cardActionTypes, actions };
