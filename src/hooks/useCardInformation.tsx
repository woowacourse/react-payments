import { useReducer } from "react";
import { CardInformationType } from "../types/CardInformationType";

const initialCardInfo: CardInformationType = {
  uniqueNumber: ["", "", "", ""],
  expirationDate: ["", ""],
  cvcNumber: [""],
  password: [""],
  cardIssuer: [null],
};

type Action =
  | { type: "SET_UNIQUE_NUMBER"; index: number; value: string }
  | { type: "SET_EXPIRATION_DATE"; index: number; value: string }
  | { type: "SET_CVC_NUMBER"; value: string }
  | { type: "SET_PASSWORD"; value: string }
  | { type: "SET_CARD_ISSUER"; value: string | null };

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

  return { cardState, dispatch };
};

export default useCardInformation;
