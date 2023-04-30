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
  cardNumber?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  expiracy?: {
    month: string;
    year: string;
  };
  owner?: string;
  cvc?: string;
  password?: {
    first: string;
    second: string;
  };
  nickName?: string;
}

interface SetCardColorAction {
  type: "SET_CARD_COLOR";
  color: string;
}

interface SetCardTitleAction {
  type: "SET_CARD_TITLE";
  title: string;
}

interface ResetCardColorTitleAction {
  type: "RESET_CARD_CONTEXT";
}

interface UpdateCardContextAction {
  type: "UPDATE_CARD_CONTEXT";
  cardNumber: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  expiracy: {
    month: string;
    year: string;
  };
  owner: string;
  cvc: string;
  password: {
    first: string;
    second: string;
  };
}

interface SetNickNameAction {
  type: "SET_NICKNAME";
  nickName: string;
}

type Action =
  | SetCardColorAction
  | SetCardTitleAction
  | ResetCardColorTitleAction
  | UpdateCardContextAction
  | SetNickNameAction;

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
    case "RESET_CARD_CONTEXT":
      return {
        title: "",
        color: "",
      };
    case "UPDATE_CARD_CONTEXT":
      return {
        ...state,
        cardNumber: {
          first: action.cardNumber.first,
          second: action.cardNumber.second,
          third: action.cardNumber.third,
          fourth: action.cardNumber.fourth,
        },
        expiracy: {
          month: action.expiracy.month,
          year: action.expiracy.year,
        },
        owner: action.owner,
        cvc: action.cvc,
        password: {
          first: action.password.first,
          second: action.password.second,
        },
      };
    case "SET_NICKNAME":
      return {
        ...state,
        nickname: action.nickName,
      };
    default:
      throw new Error("unhandled Action");
  }
}

export function CardContextProvider({ children }: PropsWithChildren) {
  const [cardCompany, setCardCompany] = useReducer(cardTypeReducer, {
    color: "",
    title: "",
    owner: "",
    cvc: "",
    cardNumber: {
      first: "",
      second: "",
      third: "",
      fourth: "",
    },
    expiracy: {
      month: "",
      year: "",
    },
    password: {
      first: "",
      second: "",
    },
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
