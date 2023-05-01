import { useState } from 'react';
import getErrorMessage from '../utils/getErrorMessage';
import type { ErrorMessage, Visited } from '../components/CardRegistrationForm/types';
import type { CardInformation } from '../components/Common/Card/types';

const initialErrorMessage = {
  cardNumber: '',
  expirationDate: '',
  owner: '',
  securityCode: '',
  password: '',
};

const initialVisited = {
  cardNumber: false,
  expirationDate: false,
  owner: false,
  securityCode: false,
  password: false,
};

const initialCardInformation = {
  cardName: '',
  bankName: '',
  cardNumber: ['', '', '', ''],
  expirationDate: ['MM', 'YY'],
  owner: ['NAME'],
  securityCode: [''],
  password: ['', ''],
};

function useCardForm() {
  const {
    cardName: CARD_NAME,
    bankName: BANK_NAME,
    cardNumber: CARD_NUMBER,
    expirationDate: EXPIRATION_DATE,
    owner: OWNER,
    securityCode: SECURITY_CODE,
    password: PASSWORD,
  } = initialCardInformation;

  const [cardName, setCardName] = useState(CARD_NAME);
  const [bankName, setBankName] = useState(BANK_NAME);
  const [cardNumber, setCardNumber] = useState<string[]>(CARD_NUMBER);
  const [expirationDate, setExpirationDate] = useState<string[]>(EXPIRATION_DATE);
  const [owner, setOwner] = useState<string[]>(OWNER);
  const [securityCode, setSecurityCode] = useState<string[]>(SECURITY_CODE);
  const [password, setPassword] = useState<string[]>(PASSWORD);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    cardNumber: '',
    expirationDate: '',
    owner: '',
    securityCode: '',
    password: '',
  });
  const [isVisited, setIsVisited] = useState<Visited>({
    cardNumber: false,
    expirationDate: false,
    owner: false,
    securityCode: false,
    password: false,
  });

  const resetCardInformation = () => {
    setCardName(CARD_NAME);
    setBankName(BANK_NAME);
    setCardNumber(CARD_NUMBER);
    setExpirationDate(EXPIRATION_DATE);
    setOwner(OWNER);
    setSecurityCode(SECURITY_CODE);
    setPassword(PASSWORD);
  };

  const resetValidateForm = () => {
    setIsVisited(initialVisited);
    setErrorMessage(initialErrorMessage);
  };

  const checkValidator = <T>(validateCallback: (value: T) => void, value: T | undefined, name: string) => {
    setIsVisited(prev => ({ ...prev, [name]: true }));
    try {
      if (value) {
        validateCallback(value);
        setErrorMessage(prev => ({ ...prev, [name]: '' }));
      }
    } catch (error) {
      setErrorMessage(prev => ({ ...prev, [name]: getErrorMessage(error) }));
      return getErrorMessage(error);
    }
    return '';
  };

  return {
    card: {
      cardName,
      bankName,
      cardNumber,
      expirationDate,
      owner,
      securityCode,
      password,
    } as CardInformation,
    checkValidator,
    errorMessage,
    isVisited,
    setCardName,
    setBankName,
    setCardNumber,
    setExpirationDate,
    setOwner,
    setSecurityCode,
    setPassword,
    resetCardInformation,
    resetValidateForm,
  };
}

export default useCardForm;
