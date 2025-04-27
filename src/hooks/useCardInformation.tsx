import { useReducer } from "react";
import { CardInformationType, Action } from "../types/CardInformationType";

const initialCardInfo: CardInformationType = {
  uniqueNumber: ["", "", "", ""],
  expirationDate: ["", ""],
  cvcNumber: [""],
  password: [""],
  cardIssuer: [null],
};

function reducer(state: CardInformationType, action: Action): CardInformationType {
  switch (action.type) {
    case "SET_UNIQUE_NUMBER": {
      const updated = [...state.uniqueNumber];
      updated[action.index] = action.value;
      return { ...state, uniqueNumber: updated };
    }

    case "SET_EXPIRATION_DATE": {
      const updated = [...state.expirationDate];
      updated[action.index] = action.value;
      return { ...state, expirationDate: updated };
    }

    case "SET_CVC_NUMBER":
      return { ...state, cvcNumber: [action.value] };

    case "SET_PASSWORD":
      return { ...state, password: [action.value] };

    case "SET_CARD_ISSUER":
      return { ...state, cardIssuer: [action.value] };

    default:
      return state;
  }
}

const useCardInformation = () => {
  const [cardState, dispatch] = useReducer(reducer, initialCardInfo);

  const allComplete = () => {
    return Object.values(cardState).every((field) => field.every((value) => value !== ""));
  };

  const uniqueNumberComplete = () => {
    return cardState.uniqueNumber.every((value) => value !== "");
  };
  const expirationDateComplete = () => {
    return cardState.expirationDate.every((value) => value !== "");
  };

  const cvcNumberComplete = () => {
    return cardState.cvcNumber[0] !== "";
  };
  const passwordComplete = () => {
    return cardState.password[0] !== "";
  };
  const cardIssuerComplete = () => {
    return cardState.cardIssuer[0] !== null;
  };

  return {
    cardState,
    dispatch,
    allComplete,
    uniqueNumberComplete,
    expirationDateComplete,
    cvcNumberComplete,
    passwordComplete,
    cardIssuerComplete,
  };
};

export default useCardInformation;
