import { validateExpirationDate } from '@utils/expiration';
import { useState } from 'react';

export const initialExpiration = { month: '', year: '' };

const useChangeExpiration = () => {
  const [expiration, setExpiration] = useState(initialExpiration);
  const [expirationError, setExpirationError] = useState({ isError: false, errorMessage: '' });

  const handleExpirationChange = (field: 'month' | 'year', value: string) => {
    const newExpiration = { ...expiration, [field]: value };

    const error = validateExpirationDate(newExpiration.month, newExpiration.year);

    setExpiration(newExpiration);
    setExpirationError(error);
  };

  return { expiration, expirationError, handleExpirationChange };
};

export default useChangeExpiration;
