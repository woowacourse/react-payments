import { createContext, useReducer, Dispatch, ReactNode } from "react";

interface CardInfoCompleteState {
  cardNumbers: boolean;
  expireDate: boolean;
  CVC: boolean;
  ownerName: boolean;
  password: boolean;
  cardType: boolean;
}

type CardInfoCompleteAction =
  | {
      type: "SET_CARD_NUMBER_COMPLETE";
      payload: boolean;
    }
  | {
      type: "SET_CARD_EXPIRE_DATE_COMPLETE";
      payload: boolean;
    }
  | { type: "SET_CARD_OWNER_NAME_COMPLETE"; payload: boolean }
  | { type: "SET_CVC_COMPLETE"; payload: boolean }
  | {
      type: "SET_CARD_PASSWORD_COMPLETE";
      payload: boolean;
    }
  | {
      type: "SET_CARD_TYPE_COMPLETE";
      payload: boolean;
    };

export const setCardNumberComplete = (complete: boolean) => ({
  type: "SET_CARD_NUMBER_COMPLETE",
  payload: complete,
});
export const setCardExpireDateComplete = (complete: boolean) => ({
  type: "SET_CARD_EXPIRE_DATE_COMPLETE",
  payload: complete,
});
export const setCardPasswordComplete = (complete: boolean) => ({
  type: "SET_CARD_PASSWORD_COMPLETE",
  payload: complete,
});
export const setCVCComplete = (complete: boolean) => ({
  type: "SET_CVC_COMPLETE",
  payload: complete,
});
export const setOwnerNameComplete = (complete: boolean) => ({
  type: "SET_CARD_OWNER_NAME_COMPLETE",
  payload: complete,
});
export const setCardTypeComplete = (complete: boolean) => ({
  type: "SET_CARD_TYPE_COMPLETE",
  payload: complete,
});

const cardInfoCompleteReducer = (
  state: CardInfoCompleteState,
  action: CardInfoCompleteAction
): CardInfoCompleteState => {
  switch (action.type) {
    case "SET_CARD_NUMBER_COMPLETE": {
      return {
        ...state,
        cardNumbers: action.payload,
      };
    }
    case "SET_CARD_EXPIRE_DATE_COMPLETE":
      return { ...state, expireDate: action.payload };
    case "SET_CARD_OWNER_NAME_COMPLETE":
      return { ...state, ownerName: action.payload };
    case "SET_CARD_PASSWORD_COMPLETE":
      return { ...state, password: action.payload };
    case "SET_CVC_COMPLETE":
      return { ...state, CVC: action.payload };
    case "SET_CARD_TYPE_COMPLETE":
      return { ...state, cardType: action.payload };
    default:
      return state;
  }
};

const initialCardInfoComplete: CardInfoCompleteState = {
  cardNumbers: false,
  expireDate: false,
  CVC: false,
  ownerName: false,
  password: false,
  cardType: false,
};

type CardInfoCompleteDispatch = Dispatch<CardInfoCompleteAction>;
export const CardInfoCompleteStateContext =
  createContext<CardInfoCompleteState | undefined>(undefined);
export const CardInfoCompleteDispatchContext =
  createContext<CardInfoCompleteDispatch | undefined>(undefined);

export function CardInfoCompleteContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cardInfoComplete, dispatch] = useReducer(
    cardInfoCompleteReducer,
    initialCardInfoComplete
  );

  return (
    <CardInfoCompleteStateContext.Provider value={cardInfoComplete}>
      <CardInfoCompleteDispatchContext.Provider value={dispatch}>
        {children}
      </CardInfoCompleteDispatchContext.Provider>
    </CardInfoCompleteStateContext.Provider>
  );
}
