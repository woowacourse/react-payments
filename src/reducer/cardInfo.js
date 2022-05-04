import { CARD_INFO_TYPES } from './types';

export const cardInfoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CARD_INFO_TYPES.SET_CARD_NUMBER: {
      const { key, cardNumber } = payload;

      return {
        ...state,
        cardNumbers: { ...state.cardNumbers, [key]: cardNumber },
      };
    }
    case CARD_INFO_TYPES.SET_EXPIRE_DATE: {
      const { key, date } = payload;

      return { ...state, expireDate: { ...state.expireDate, [key]: date } };
    }
    case CARD_INFO_TYPES.SET_OWNER_NAME: {
      const { ownerName } = payload;

      return { ...state, ownerName };
    }
    case CARD_INFO_TYPES.SET_CVC: {
      const { CVC } = payload;

      return { ...state, CVC };
    }
    case CARD_INFO_TYPES.SET_PASSWORD: {
      const { key, password } = payload;

      return {
        ...state,
        password: { ...state.password, [key]: password },
      };
    }
    case CARD_INFO_TYPES.SET_CARD_TYPE: {
      const { cardType } = payload;

      return {
        ...state,
        cardType,
      };
    }
    default:
      throw new Error('NO SUCH TYPE');
  }
};
