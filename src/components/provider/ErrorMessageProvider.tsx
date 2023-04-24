import { createContext, useContext, useState } from "react";

interface ErrorMessageProviderProps {
  children: React.ReactNode;
}

interface ErrorMessageValue {
  hasError: () => boolean;
  cardNumberErrorMessage: string;
  expirationDateErrorMessage: string;
  nameErrorMessage: string;
  securityCodeErrorMessage: string;
  passwordErrorMessage: string;
}

interface ErrorMessageAction {
  setCardNumberErrorMessage: (cardNumberErrorMessage: string) => void;
  setExpirationDateErrorMessage: (expirationDateErrorMessage: string) => void;
  setNameErrorMessage: (nameErrorMessage: string) => void;
  setSecurityCodeErrorMessage: (securityCodeErrorMessage: string) => void;
  setPasswordErrorMessage: (passwordErrorMessage: string) => void;
}

const ErrorMessageValueContext = createContext<ErrorMessageValue | null>(null);
const ErrorMessageActionContext = createContext<ErrorMessageAction | null>(null);

const ErrorMessageProvider = ({ children }: ErrorMessageProviderProps) => {
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState("");
  const [expirationDateErrorMessage, setExpirationDateErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [securityCodeErrorMessage, setSecurityCodeErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const hasError = () => {
    return (
      !!cardNumberErrorMessage || !!expirationDateErrorMessage || !!passwordErrorMessage || !!securityCodeErrorMessage
    );
  };

  const errorMessage = {
    hasError,
    cardNumberErrorMessage,
    expirationDateErrorMessage,
    nameErrorMessage,
    securityCodeErrorMessage,
    passwordErrorMessage,
  };

  const setErrorMessage = {
    setCardNumberErrorMessage,
    setExpirationDateErrorMessage,
    setNameErrorMessage,
    setSecurityCodeErrorMessage,
    setPasswordErrorMessage,
  };

  return (
    <ErrorMessageValueContext.Provider value={errorMessage}>
      <ErrorMessageActionContext.Provider value={setErrorMessage}>{children}</ErrorMessageActionContext.Provider>
    </ErrorMessageValueContext.Provider>
  );
};

export const useErrorMessageValue = () => {
  const value = useContext(ErrorMessageValueContext);
  if (value === null) {
    throw new Error("ErrorMessageValue 에러");
  }
  return value;
};

export const useErrorMessageAction = () => {
  const value = useContext(ErrorMessageActionContext);
  if (value === null) {
    throw new Error("ErrorMessageAction 에러");
  }
  return value;
};

export default ErrorMessageProvider;
