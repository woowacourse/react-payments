import { useState } from 'react';
import getErrorMessage from '../../../utils/getErrorMessage';
import type { CardInformation } from '../../Common/Card/types';
import type { ErrorMessage, Visited } from '../types';

function useCardForm() {
  const [bankName, setBankName] = useState('');
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState<string[]>(['MM', 'YY']);
  const [owner, setOwner] = useState<string[]>(['NAME']);
  const [securityCode, setSecurityCode] = useState<string[]>(['']);
  const [password, setPassword] = useState<string[]>(['', '']);
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
    card: { bankName, cardNumber, expirationDate, owner, securityCode, password } as unknown as CardInformation,
    checkValidator,
    errorMessage,
    isVisited,
    setBankName,
    setCardNumber,
    setExpirationDate,
    setOwner,
    setSecurityCode,
    setPassword,
  };
}

export default useCardForm;
