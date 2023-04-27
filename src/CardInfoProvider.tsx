import { createContext, useState } from 'react';
import type { FormInputValueType, CardIssuerType } from './types';

type CardInfoContextType = {
  cardIssuer: CardIssuerType;
  cardNumber: FormInputValueType;
  cardOwnerName: FormInputValueType;
  cardPassword: FormInputValueType;
  cardSecurityCode: FormInputValueType;
  cardExpirationDate: FormInputValueType;
  hasCheckedValidation: boolean;
  setCardIssuer: (cardIssuer: CardIssuerType) => void;
  setCardNumber: (cardNumber: FormInputValueType) => void;
  setCardOwnerName: (cardOwnerName: FormInputValueType) => void;
  setCardPassword: (password: FormInputValueType) => void;
  setCardSecurityCode: (securityCode: FormInputValueType) => void;
  setCardExpirationDate: (expirationDate: FormInputValueType) => void;
  setHasCheckedValidation: (hasChecked: boolean) => void;
  reset: () => void;
};

const emptyFormInputValue = { isValid: false, value: '' };

const CardInfoContext = createContext<CardInfoContextType>({
  cardIssuer: 'BC카드',
  cardNumber: emptyFormInputValue,
  cardOwnerName: emptyFormInputValue,
  cardPassword: emptyFormInputValue,
  cardSecurityCode: emptyFormInputValue,
  cardExpirationDate: emptyFormInputValue,
  hasCheckedValidation: false,
  setCardIssuer: () => {},
  setCardNumber: () => {},
  setCardOwnerName: () => {},
  setCardPassword: () => {},
  setCardSecurityCode: () => {},
  setCardExpirationDate: () => {},
  setHasCheckedValidation: () => {},
  reset: () => {},
});

interface CardInfoProviderProps {
  children?: React.ReactNode;
}

const CardInfoProvider = ({ children }: CardInfoProviderProps) => {
  const [cardIssuer, setCardIssuer] = useState<CardIssuerType>('BC카드');
  const [cardNumber, setCardNumber] = useState(emptyFormInputValue);
  const [cardOwnerName, setCardOwnerName] = useState(emptyFormInputValue);
  const [cardPassword, setCardPassword] = useState(emptyFormInputValue);
  const [cardSecurityCode, setCardSecurityCode] = useState(emptyFormInputValue);
  const [cardExpirationDate, setCardExpirationDate] = useState(emptyFormInputValue);
  const [hasCheckedValidation, setHasCheckedValidation] = useState(false);

  const reset = () => {
    setCardIssuer(() => 'BC카드');
    setCardNumber(() => emptyFormInputValue);
    setCardOwnerName(() => emptyFormInputValue);
    setCardPassword(() => emptyFormInputValue);
    setCardSecurityCode(() => emptyFormInputValue);
    setCardExpirationDate(() => emptyFormInputValue);
    setHasCheckedValidation(() => false);
  };

  return (
    <CardInfoContext.Provider
      value={{
        cardIssuer,
        cardNumber,
        cardOwnerName,
        cardPassword,
        cardSecurityCode,
        cardExpirationDate,
        hasCheckedValidation,
        setCardIssuer,
        setCardNumber,
        setCardOwnerName,
        setCardPassword,
        setCardSecurityCode,
        setCardExpirationDate,
        setHasCheckedValidation,
        reset,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};

export { CardInfoContext, CardInfoProvider };
