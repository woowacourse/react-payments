import { useState } from 'react';
import useValidation from './useValidation';
import { validateCardholderName } from '../validators';

const useCardHolderName = () => {
  const [cardholderName, setCardholderName] = useState('');
  const { errorStatus, updateErrorStatus } = useValidation(cardholderName, validateCardholderName);

  return {
    data: cardholderName,
    setData: setCardholderName,
    errorStatus,
    updateErrorStatus,
  };
};

export default useCardHolderName;
