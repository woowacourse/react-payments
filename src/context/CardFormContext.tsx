import { createContext, useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';

interface CardFormProviderProps {
  children: React.ReactNode;
}

interface CardFormValue {
  buttonActive: boolean;
  cardNumber: string[];
  setCardNumber: (cardNumber: string[]) => void;
  expirationDate: string[];
  setExpirationDate: (expirationDate: string[]) => void;
  name: string;
  setName: (name: string) => void;
  securityCode: string;
  setSecurityCode: (securityCode: string) => void;
  password: string[];
  setPassword: (password: string[]) => void;
}

interface CardFormErrorValue {
  cardNumberError: string;
  setCardNumberError: React.Dispatch<React.SetStateAction<string>>;
  expirationDateError: string;
  setExpirationDateError: React.Dispatch<React.SetStateAction<string>>;
  nameError: string;
  setNameError: React.Dispatch<React.SetStateAction<string>>;
  securityCodeError: string;
  setSecurityCodeError: React.Dispatch<React.SetStateAction<string>>;
  passwordError: string;
  setPasswordError: React.Dispatch<React.SetStateAction<string>>;
}

export const CardFormValueContext = createContext<CardFormValue>({
  buttonActive: false,
  cardNumber: ['', '', '', ''],
  setCardNumber: () => {},
  expirationDate: ['', ''],
  setExpirationDate: () => {},
  name: '',
  setName: () => {},
  securityCode: '',
  setSecurityCode: () => {},
  password: ['', ''],
  setPassword: () => {},
});

export const CardFormErrorValueContext = createContext<CardFormErrorValue>({
  cardNumberError: '',
  setCardNumberError: () => {},
  expirationDateError: '',
  setExpirationDateError: () => {},
  nameError: '',
  setNameError: () => {},
  securityCodeError: '',
  setSecurityCodeError: () => {},
  passwordError: '',
  setPasswordError: () => {},
});

export const CardFormProvider = ({ children }: CardFormProviderProps) => {
  const [buttonActive, setButtonActive] = useState(false);

  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState(['', '']);
  const [name, setName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState(['', '']);

  const [cardNumberError, setCardNumberError] = useState('');
  const [expirationDateError, setExpirationDateError] = useState('');
  const [nameError, setNameError] = useState('');
  const [securityCodeError, setSecurityCodeError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useFormValidation(
    cardNumber,
    expirationDate,
    securityCode,
    password,
    cardNumberError,
    expirationDateError,
    securityCodeError,
    passwordError,
    setButtonActive
  );

  const cardValue = {
    buttonActive,
    cardNumber,
    setCardNumber,
    expirationDate,
    setExpirationDate,
    name,
    setName,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
  };

  const cardErrorValue = {
    cardNumberError,
    setCardNumberError,
    expirationDateError,
    setExpirationDateError,
    nameError,
    setNameError,
    securityCodeError,
    setSecurityCodeError,
    passwordError,
    setPasswordError,
  };

  return (
    <CardFormValueContext.Provider value={cardValue}>
      <CardFormErrorValueContext.Provider value={cardErrorValue}>
        {children}
      </CardFormErrorValueContext.Provider>
    </CardFormValueContext.Provider>
  );
};
