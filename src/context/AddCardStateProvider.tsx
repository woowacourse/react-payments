import { createContext, useState } from "react";
import { Card } from "../types";
import {
  cardNumberInitialValue,
  emptyArrowFuction,
  expirationDateInitialValue,
  passwordInitialValue,
} from "../util/initialValue";

interface AddCardState {
  error: boolean;
  cardInfo: Card;
  setError: (value: boolean) => void;
  setCardInfo: React.Dispatch<React.SetStateAction<Card>>;
}

const initialValue = {
  error: true,
  cardInfo: {
    cardName: "",
    cardCompany: undefined,
    cardNumber: cardNumberInitialValue,
    expirationDate: expirationDateInitialValue,
    ownerName: "",
    securityCode: "",
    password: passwordInitialValue,
  },
  setError: emptyArrowFuction,
  setCardInfo: emptyArrowFuction,
};

export const AddCardStateContext = createContext<AddCardState>(initialValue);

export const AddCardStateContextProvider = ({ children }: React.PropsWithChildren) => {
  const [error, setError] = useState<boolean>(false);
  const [cardInfo, setCardInfo] = useState<Card>({
    cardName: "",
    cardCompany: undefined,
    cardNumber: cardNumberInitialValue,
    expirationDate: expirationDateInitialValue,
    ownerName: "",
    securityCode: "",
    password: passwordInitialValue,
  });

  const value = {
    error,
    cardInfo,
    setError,
    setCardInfo,
  };

  return <AddCardStateContext.Provider value={value}>{children}</AddCardStateContext.Provider>;
};
