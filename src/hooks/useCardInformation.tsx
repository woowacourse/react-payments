import { useReducer } from "react";
import { CardInformationType } from "../types/CardInformationType";

const initialCardInfo: CardInformationType = {
  uniqueNumber: ["", "", "", ""],
  expirationDate: ["", ""],
  cvcNumber: [""],
};

type Action =
  | { type: "SET_UNIQUE_NUMBER"; index: number; value: string }
  | { type: "SET_EXPIRATION_DATE"; index: number; value: string }
  | { type: "SET_CVC"; value: string };

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

    case "SET_CVC":
      return { ...state, cvcNumber: [action.value] };

    default:
      return state;
  }
}

const useCardInformation = () => {
  const [cardState, dispatch] = useReducer(reducer, initialCardInfo);

  return { cardState, dispatch };
};

export default useCardInformation;
