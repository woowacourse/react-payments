import { isValidExpirationDate } from '@domain/creditCard/expiration';
import { isContainsNonNumeric } from '@utils/number';
import { useState } from 'react';

export const initialExpiration = { month: '', year: '' };

const useChangeExpiration = () => {
  const [expiration, setExpiration] = useState(initialExpiration);
  const [expirationError, setExpirationError] = useState({ isError: false, errorMessage: '' });
  const [isExpirationCompleted, setIsExpirationCompleted] = useState(false);

  const handleExpirationChange = (field: 'month' | 'year', value: string) => {
    if (isContainsNonNumeric(value)) {
      setExpirationError({ isError: true, errorMessage: '월은 01에서 12 사이의 숫자여야 합니다.' });
      return;
    }

    const newExpiration = { ...expiration, [field]: value };
    const error = isValidExpirationDate(newExpiration.month, newExpiration.year);

    setExpiration(newExpiration);
    setExpirationError(error);

    if (!error.isError) setIsExpirationCompleted(true);
  };

  return { isExpirationCompleted, expiration, expirationError, handleExpirationChange };
};

export default useChangeExpiration;
