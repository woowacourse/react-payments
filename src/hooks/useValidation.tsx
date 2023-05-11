import { useEffect, useState } from 'react';
import { validateCardNumber, validateExpireDate, validateSecurityCode } from '../utils/validation';

const useValidation = (inputValue: string[] | string, type: 'cardNumber' | 'expireDate' | 'cvc') => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (type === 'cardNumber' && Array.isArray(inputValue)) {
      setErrorMessage(validateCardNumber(inputValue));
      return;
    }
    if (type === 'expireDate') {
      setErrorMessage(validateExpireDate(inputValue[0], inputValue[1]));
      return;
    }
    if (type === 'cvc' && typeof inputValue === 'string') {
      setErrorMessage(validateSecurityCode(inputValue));
      return;
    }
  }, [inputValue, type]);

  return { errorMessage };
};

export default useValidation;
