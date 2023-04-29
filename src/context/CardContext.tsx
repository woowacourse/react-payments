import {
  createContext,
  PropsWithChildren,
  useReducer,
  Dispatch,
  useContext,
} from "react";

interface CardState {
  color: string;
  title: string;
}

interface SetCardColorAction {
  type: "SET_CARD_COLOR";
  color: string;
}

interface SetCardTitleAction {
  type: "SET_CARD_TITLE";
  title: string;
}

type Action = SetCardColorAction | SetCardTitleAction;

type CardDispatch = Dispatch<Action>;

const CardStateContext = createContext<CardState | null>(null);
const CardDispatchContext = createContext<CardDispatch | null>(null);

function cardTypeReducer(state: CardState, action: Action) {
  switch (action.type) {
    case "SET_CARD_COLOR":
      return {
        ...state,
        color: action.color,
      };
    case "SET_CARD_TITLE":
      return {
        ...state,
        title: action.title,
      };
    default:
      throw new Error("unhandled Action");
  }
}

export function CardContextProvider({ children }: PropsWithChildren) {
  const [cardCompany, setCardCompany] = useReducer(cardTypeReducer, {
    color: "",
    title: "",
  });

  return (
    <CardStateContext.Provider value={cardCompany}>
      <CardDispatchContext.Provider value={setCardCompany}>
        {children}
      </CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
}

export function useCardState() {
  const state = useContext(CardStateContext);
  if (!state) throw new Error("cannot find Provider");
  return state;
}

export function useCardAction() {
  const dispatch = useContext(CardDispatchContext);
  if (!dispatch) throw new Error("cannot find Provider");
  return dispatch;
}
