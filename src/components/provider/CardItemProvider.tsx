import { createContext, useContext, useState } from "react";
import { INPUT_LENGTH } from "../../constants";
import { isInputsSatisfied } from "../../utils";

interface CardItemProviderProps {
  children: React.ReactNode;
}

interface CardItemValue {
  isAllInputSatisfied: () => boolean;
  cardNumber: string[];
  expirationDate: string[];
  name: string;
  securityCode: string;
  password: string[];
}

interface CardItemAction {
  setCardNumber: (cardNumber: string[]) => void;
  setExpirationDate: (expirationDate: string[]) => void;
  setName: (name: string) => void;
  setSecurityCode: (securityCode: string) => void;
  setPassword: (password: string[]) => void;
}

const CardItemValueContext = createContext<CardItemValue | null>(null);
const CardItemActionContext = createContext<CardItemAction | null>(null);

const CardItemProvider = ({ children }: CardItemProviderProps) => {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expirationDate, setExpirationDate] = useState(["", ""]);
  const [name, setName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [password, setPassword] = useState(["", ""]);

  const isAllInputSatisfied = () => {
    return (
      isInputsSatisfied(cardNumber, INPUT_LENGTH.CARD_NUMBER) &&
      isInputsSatisfied(expirationDate, INPUT_LENGTH.EXPIRATION_DATE) &&
      securityCode.length === INPUT_LENGTH.SECURITY_CODE &&
      isInputsSatisfied(password, INPUT_LENGTH.PASSWORD)
    );
  };

  const cardItem = {
    isAllInputSatisfied,
    cardNumber,
    expirationDate,
    name,
    securityCode,
    password,
  };

  const setCardItem = {
    setCardNumber,
    setExpirationDate,
    setName,
    setSecurityCode,
    setPassword,
  };

  return (
    <CardItemValueContext.Provider value={cardItem}>
      <CardItemActionContext.Provider value={setCardItem}>{children}</CardItemActionContext.Provider>
    </CardItemValueContext.Provider>
  );
};

export const useCardItemValue = () => {
  const value = useContext(CardItemValueContext);
  if (value === null) {
    throw new Error("CardItemValue 에러");
  }
  return value;
};

export const useCardItemAction = () => {
  const value = useContext(CardItemActionContext);
  if (value === null) {
    throw new Error("CardItemAction 에러");
  }
  return value;
};

export default CardItemProvider;
