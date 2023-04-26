import { createContext, useState } from 'react';
import type { FormInputValueType } from './types';

type CardInfoContextType = {
  cardIssuer: FormInputValueType;
  cardNumber: FormInputValueType;
  cardOwnerName: FormInputValueType;
  cardPassword: FormInputValueType;
  cardSecurityCode: FormInputValueType;
  cardExpirationDate: FormInputValueType;
  setCardIssuer: (cardIssuer: FormInputValueType) => void;
  setCardNumber: (cardNumber: FormInputValueType) => void;
  setCardOwnerName: (cardOwnerName: FormInputValueType) => void;
  setCardPassword: (password: FormInputValueType) => void;
  setCardSecurityCode: (securityCode: FormInputValueType) => void;
  setCardExpirationDate: (expirationDate: FormInputValueType) => void;
};

const emptyFormInputValue = { isValid: false, value: '' };

const CardInfoContext = createContext<CardInfoContextType>({
  cardIssuer: emptyFormInputValue,
  cardNumber: emptyFormInputValue,
  cardOwnerName: emptyFormInputValue,
  cardPassword: emptyFormInputValue,
  cardSecurityCode: emptyFormInputValue,
  cardExpirationDate: emptyFormInputValue,
  setCardIssuer: () => {},
  setCardNumber: () => {},
  setCardOwnerName: () => {},
  setCardPassword: () => {},
  setCardSecurityCode: () => {},
  setCardExpirationDate: () => {},
});

interface CardInfoProviderProps {
  children?: React.ReactNode;
}

const CardInfoProvider = ({ children }: CardInfoProviderProps) => {
  const [cardIssuer, setCardIssuer] = useState(emptyFormInputValue);
  const [cardNumber, setCardNumber] = useState(emptyFormInputValue);
  const [cardOwnerName, setCardOwnerName] = useState(emptyFormInputValue);
  const [cardPassword, setCardPassword] = useState(emptyFormInputValue);
  const [cardSecurityCode, setCardSecurityCode] = useState(emptyFormInputValue);
  const [cardExpirationDate, setCardExpirationDate] = useState(emptyFormInputValue);

  return (
    <CardInfoContext.Provider
      value={{
        cardIssuer,
        cardNumber,
        cardOwnerName,
        cardPassword,
        cardSecurityCode,
        cardExpirationDate,
        setCardIssuer,
        setCardNumber,
        setCardOwnerName,
        setCardPassword,
        setCardSecurityCode,
        setCardExpirationDate,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};

export { CardInfoContext, CardInfoProvider };
