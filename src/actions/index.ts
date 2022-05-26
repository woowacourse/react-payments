import { Action, CardType } from 'types';

const actions = {
  saveCardInfo: (card: CardType): Action => {
    return { type: 'SAVE_CARD_INFO', payload: card };
  },
  addCardToList: (cardName: CardType['cardName']): Action => {
    return { type: 'ADD_CARD_TO_LIST', payload: cardName };
  },
};

export default actions;
