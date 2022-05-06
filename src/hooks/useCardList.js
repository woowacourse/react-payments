import { useReducer } from 'react';

const defaultCardList = [];
const cardListReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_CARD': {
      const {
        id,
        cardInput: { cardNumber, expirationDate, ownerName, securityCode, password, cardType },
      } = payload;

      return [
        ...state,
        {
          id,
          cardNumber,
          expirationDate,
          ownerName,
          securityCode,
          password,
          cardType,
          alias: '별칭을 정해주세요',
        },
      ];
    }
    case 'CHANGE_ALIAS': {
      const { alias, id } = payload;

      return state.map(card => {
        if (card.id === id) {
          return { ...card, alias };
        }
        return card;
      });
    }
  }
};

export const useCardList = () => {
  return useReducer(cardListReducer, defaultCardList);
};
