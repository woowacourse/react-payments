import { createContext, useReducer, Dispatch, ReactNode } from "react";

type CardNumbersKeys =
  | "firstNumber"
  | "secondNumber"
  | "thirdNumber"
  | "fourthNumber";
type CardNumbers = {
  [key in CardNumbersKeys]: string;
};

type CardExpireDateKeys = "month" | "year";
type CardExpireDate = {
  [key in CardExpireDateKeys]?: string;
};

type CardPasswordKeys = "firstNumber" | "secondNumber";
type CardPassword = {
  [key in CardPasswordKeys]?: string;
};

type CardNameKeys =
  | "포코"
  | "준"
  | "공원"
  | "후이"
  | "유세지"
  | "마르코"
  | "아놀드"
  | "록바";

interface CardType {
  name: string;
  backgroundColor: string;
}

interface CardInfoState {
  cardNumbers: CardNumbers;
  expireDate: CardExpireDate;
  password: CardPassword;
  ownerName: string;
  CVC: string;
  cardType: CardType;
}

type CardInfoAction =
  | {
      type: "SET_CARD_NUMBER";
      payload: { cardNumber: CardNumbersKeys; value: string };
    }
  | {
      type: "SET_CARD_EXPIRE_DATE";
      payload: { date: CardExpireDateKeys; value: string };
    }
  | { type: "SET_CARD_OWNER_NAME"; payload: string }
  | { type: "SET_CVC"; payload: string }
  | {
      type: "SET_CARD_PASSWORD";
      payload: { password: CardPasswordKeys; value: string };
    }
  | {
      type: "SET_CARD_TYPE";
      payload: { name: CardNameKeys; backgroundColor: string };
    };

type CardInfoDispatch = Dispatch<CardInfoAction>;

export const setCardNumber = (cardNumber: CardNumbersKeys, value: string) => ({
  type: "SET_CARD_NUMBER",
  payload: { cardNumber, value },
});

export const setCardExpireDate = (date: CardExpireDateKeys, value: string) => ({
  type: "SET_CARD_EXPIRE_DATE",
  payload: { date, value },
});

export const setCVC = (CVC: string) => ({
  type: "SET_CVC",
  payload: CVC,
});

export const setCardOwnerName = (name: string) => ({
  type: "SET_CARD_OWNER_NAME",
  payload: name,
});

export const setCardPassword = (password: CardPasswordKeys, value: string) => ({
  type: "SET_CARD_PASSWORD",
  payload: { password, value },
});

export const setCardType = (name: CardNameKeys, backgroundColor: string) => ({
  type: "SET_CARD_TYPE",
  payload: { name, backgroundColor },
});

const cardInfoReducer = (
  state: CardInfoState,
  action: CardInfoAction
): CardInfoState => {
  switch (action.type) {
    case "SET_CARD_NUMBER": {
      const { cardNumber, value } = action.payload;

      return {
        ...state,
        cardNumbers: { ...state.cardNumbers, [cardNumber]: value },
      };
    }
    case "SET_CARD_EXPIRE_DATE": {
      const { date, value } = action.payload;

      return {
        ...state,
        expireDate: { ...state.expireDate, [date]: value },
      };
    }
    case "SET_CARD_OWNER_NAME":
      return { ...state, ownerName: action.payload };
    case "SET_CVC":
      return { ...state, CVC: action.payload };
    case "SET_CARD_PASSWORD": {
      const { password, value } = action.payload;

      return {
        ...state,
        password: { ...state.password, [password]: value },
      };
    }
    case "SET_CARD_TYPE": {
      const { name, backgroundColor } = action.payload;

      return { ...state, cardType: { name, backgroundColor } };
    }
    default:
      return state;
  }
};

const initialCardInfo: CardInfoState = {
  cardNumbers: {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
  },
  expireDate: {
    month: "",
    year: "",
  },
  ownerName: "",
  CVC: "",
  password: {
    firstNumber: "",
    secondNumber: "",
  },
  cardType: {
    name: "",
    backgroundColor: "",
  },
};

export const CardInfoStateContext =
  createContext<CardInfoState | undefined>(initialCardInfo);
export const CardInfoDispatchContext = createContext<
  CardInfoDispatch | undefined
>(() => {});

export function CardInfoContextProvider({ children }: { children: ReactNode }) {
  const [cardInfo, dispatch] = useReducer(cardInfoReducer, initialCardInfo);

  return (
    <CardInfoStateContext.Provider value={cardInfo}>
      <CardInfoDispatchContext.Provider value={dispatch}>
        {children}
      </CardInfoDispatchContext.Provider>
    </CardInfoStateContext.Provider>
  );
}
