import { TYPES } from 'store/card/types';

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_NUMBER: {
      const cardNumber = [...state.cardNumber];
      const { value, index } = action;
      cardNumber[index] = value;

      return {
        ...state,
        cardNumber,
      };
    }

    case TYPES.SET_NUMBER_ERROR_MESSAGE: {
      return {
        ...state,
        cardNumberErrorMessage: action.errorMessage,
      };
    }

    case TYPES.SET_EXPIRATION: {
      const cardExpiration = [...state.cardExpiration];
      const { value, index } = action;
      cardExpiration[index] = value;

      return {
        ...state,
        cardExpiration,
      };
    }

    case TYPES.SET_EXPIRATION_ERROR_MESSAGE: {
      return {
        ...state,
        cardExpirationErrorMessage: action.errorMessage,
      };
    }

    case TYPES.SET_OWNER: {
      return { ...state, cardOwner: action.value };
    }

    case TYPES.SET_OWNER_ERROR_MESSAGE: {
      return {
        ...state,
        cardOwnerErrorMessage: action.errorMessage,
      };
    }

    case TYPES.SET_CVC: {
      return { ...state, cardCvc: action.value };
    }

    case TYPES.SET_CVC_ERROR_MESSAGE: {
      return {
        ...state,
        cardCvcErrorMessage: action.errorMessage,
      };
    }

    case TYPES.SET_PASSWORD: {
      const cardPassword = [...state.cardPassword];
      const { value, index } = action;
      cardPassword[index] = value;

      return {
        ...state,
        cardPassword,
      };
    }

    case TYPES.SET_PASSWORD_ERROR_MESSAGE: {
      return {
        ...state,
        cardPasswordErrorMessage: action.errorMessage,
      };
    }

    case TYPES.SET_COMPANY_ERROR_MESSAGE: {
      return {
        ...state,
        cardCompanyErrorMessage: action.errorMessage,
      };
    }

    case TYPES.SET_COMPANY_INDEX: {
      return {
        ...state,
        cardCompanyIndex: action.index,
      };
    }

    case TYPES.ADD_CARD: {
      return {
        ...state,
        cards: [...state.cards, action.newCardData],
        cardNumber: ['', '', '', ''],
        cardExpiration: ['', ''],
        cardOwner: '',
        cardCvc: '',
        cardPassword: ['', ''],
        cardCompanyIndex: -1,
      };
    }

    case TYPES.SET_CARD_ORDER: {
      return {
        ...state,
        cards: action.cards,
      };
    }

    case TYPES.UPDATE_NICKNAME: {
      const updatedCards = state.cards.map((cardData) => {
        if (cardData.id === action.id) {
          cardData.cardNickname = action.nickname;
        }
        return cardData;
      });

      return {
        ...state,
        cards: updatedCards,
        cardNumber: ['', '', '', ''],
        cardExpiration: ['', ''],
        cardOwner: '',
        cardCvc: '',
        cardPassword: ['', ''],
        cardCompanyIndex: -1,
      };
    }

    case TYPES.DELETE_CARD: {
      const updatedCards = state.cards.filter((cardData) => cardData.id !== action.id);

      return {
        ...state,
        cards: updatedCards,
      };
    }

    default:
      throw new Error('Unhandled action type.');
  }
};

export default reducer;
