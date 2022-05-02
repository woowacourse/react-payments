import {
  SET_COMPANY_INDEX,
  SET_CVC,
  SET_CVC_ERROR_MESSAGE,
  SET_EXPIRATION_ERROR_MESSAGE,
  SET_MODAL_FLAG,
  SET_OWNER,
  SET_OWNER_ERROR_MESSAGE,
  SET_PASSWORD,
  SET_PASSWORD_ERROR_MESSAGE,
  SET_COMPANY_ERROR_MESSAGE,
  SET_EXPIRATION,
  SET_NUMBER_ERROR_MESSAGE,
  SET_NUMBER,
} from './card.actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_NUMBER: {
      const cardNumber = [...state.cardNumber];
      const { value, index } = action;

      cardNumber[index] = value;

      return {
        ...state,
        cardNumber,
      };
    }

    case SET_NUMBER_ERROR_MESSAGE: {
      return {
        ...state,
        cardNumberErrorMessage: action.errorMessage,
      };
    }

    case SET_EXPIRATION: {
      const cardExpiration = [...state.cardExpiration];
      const { value, index } = action;

      cardExpiration[index] = value;

      return {
        ...state,
        cardExpiration,
      };
    }

    case SET_EXPIRATION_ERROR_MESSAGE: {
      return {
        ...state,
        cardExpirationErrorMessage: action.errorMessage,
      };
    }

    case SET_OWNER: {
      return { ...state, cardOwner: action.value };
    }

    case SET_OWNER_ERROR_MESSAGE: {
      return {
        ...state,
        cardOwnerErrorMessage: action.errorMessage,
      };
    }

    case SET_CVC: {
      return { ...state, cardCvc: action.value };
    }

    case SET_CVC_ERROR_MESSAGE: {
      return {
        ...state,
        cardCvcErrorMessage: action.errorMessage,
      };
    }

    case SET_PASSWORD: {
      const cardPassword = [...state.cardPassword];
      const { value, index } = action;

      cardPassword[index] = value;

      return {
        ...state,
        cardPassword,
      };
    }

    case SET_PASSWORD_ERROR_MESSAGE: {
      return {
        ...state,
        cardPasswordErrorMessage: action.errorMessage,
      };
    }

    case SET_COMPANY_ERROR_MESSAGE: {
      return {
        ...state,
        cardCompanyErrorMessage: action.errorMessage,
      };
    }

    case SET_MODAL_FLAG: {
      return {
        ...state,
        modalFlag: action.flag,
      };
    }

    case SET_COMPANY_INDEX: {
      return {
        ...state,
        cardCompanyIndex: action.index,
      };
    }

    default:
      return state;
  }
};

export default reducer;
