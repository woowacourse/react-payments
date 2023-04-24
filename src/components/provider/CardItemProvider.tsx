import { createContext, useContext, useState } from "react";

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
      isCardNumberInputSatisfied() &&
      isExpirationDateInputSatisfied() &&
      isSecurityCodeInputSatisfied() &&
      isPasswordInputSatisfied()
    );
  };

  const isCardNumberInputSatisfied = () => {
    return cardNumber.every((numberValue) => numberValue.length === 4);
  };

  const isExpirationDateInputSatisfied = () => {
    return expirationDate.every((dateValue) => dateValue.length === 2);
  };

  const isSecurityCodeInputSatisfied = () => {
    return securityCode.length === 3;
  };

  const isPasswordInputSatisfied = () => {
    return password.every((passwordValue) => !!passwordValue);
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
