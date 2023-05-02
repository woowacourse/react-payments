import { createContext, useState } from "react";
import { CARD_LOGO } from "../components/CardCompanyIcon/CardCompanyIcon";
import { CardCompany, CardExpirationDate, CardNumber, CardPassword } from "../types";
import {
  cardNumberInitialValue,
  emptyArrowFuction,
  expirationDateInitialValue,
  passwordInitialValue,
} from "../util/initialValue";

interface AddCardState {
  error: boolean;
  cardCompany: CardCompany;
  cardNumber: CardNumber;
  expirationDate: CardExpirationDate;
  ownerName: string;
  securityCode: string;
  password: CardPassword;
  setError: (value: boolean) => void;
  setCardCompany: (value: CardCompany) => void;
  setCardNumber: (value: CardNumber) => void;
  setExpirationDate: (value: CardExpirationDate) => void;
  setOwnerName: (value: string) => void;
  setSecurityCode: (value: string) => void;
  setPassword: (value: CardPassword) => void;
}

const initialValue = {
  modalOpen: false,
  error: true,
  cardCompany: undefined,
  cardNumber: cardNumberInitialValue,
  expirationDate: expirationDateInitialValue,
  ownerName: "",
  securityCode: "",
  password: passwordInitialValue,
  setModalOpen: emptyArrowFuction,
  setError: emptyArrowFuction,
  setCardCompany: emptyArrowFuction,
  setCardNumber: emptyArrowFuction,
  setExpirationDate: emptyArrowFuction,
  setOwnerName: emptyArrowFuction,
  setSecurityCode: emptyArrowFuction,
  setPassword: emptyArrowFuction,
};

export const AddCardStateContext = createContext<AddCardState>(initialValue);

export const AddCardStateContextProvider = ({ children }: React.PropsWithChildren) => {
  const [error, setError] = useState<boolean>(false);
  const [cardCompany, setCardCompany] = useState<keyof typeof CARD_LOGO>();
  const [cardNumber, setCardNumber] = useState<CardNumber>(cardNumberInitialValue);
  const [expirationDate, setExpirationDate] = useState<CardExpirationDate>(expirationDateInitialValue);
  const [ownerName, setOwnerName] = useState<string>("");
  const [securityCode, setSecurityCode] = useState<string>("");
  const [password, setPassword] = useState<CardPassword>(passwordInitialValue);

  const value = {
    error,
    cardCompany,
    cardNumber,
    expirationDate,
    ownerName,
    securityCode,
    password,
    setError,
    setCardCompany,
    setCardNumber,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
  };

  return <AddCardStateContext.Provider value={value}>{children}</AddCardStateContext.Provider>;
};
