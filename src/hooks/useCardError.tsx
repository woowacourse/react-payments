import { useReducer } from "react";
import { CardErrorType, ErrorAction } from "../types/CardInformationType";

const initialCardInfo: CardErrorType = {
  uniqueNumber: [false, false, false, false],
  expirationDate: [false, false],
  cvcNumber: [false],
  password: [false],
};

function reducer(state: CardErrorType, action: ErrorAction): CardErrorType {
  switch (action.type) {
    case "SET_UNIQUE_NUMBER_ERROR": {
      const updated = [...state.uniqueNumber];
      updated[action.index] = action.value;
      return { ...state, uniqueNumber: updated };
    }

    case "SET_EXPIRATION_DATE_ERROR": {
      const updated = [...state.expirationDate];
      updated[action.index] = action.value;
      return { ...state, expirationDate: updated };
    }

    case "SET_CVC_NUMBER_ERROR":
      return { ...state, cvcNumber: [action.value] };

    case "SET_PASSWORD_ERROR":
      return { ...state, password: [action.value] };

    default:
      return state;
  }
}

const useCardError = () => {
  const [cardErrorState, dispatchError] = useReducer(reducer, initialCardInfo);

  const allClear = () => {
    return Object.values(cardErrorState).every((field) => field.every((value) => value === false));
  };

  return { cardErrorState, dispatchError, allClear };
};

export default useCardError;
