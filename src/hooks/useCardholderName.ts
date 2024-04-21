import { useState } from 'react';
import useValidation from './useValidation';
import { inquireCardholderName } from '../inquiry';

const useCardHolderName = () => {
  const [cardholderName, setCardholderName] = useState('');
  const { errorStatus, updateErrorStatus } = useValidation(cardholderName, inquireCardholderName);

  return {
    data: cardholderName,
    setData: setCardholderName,
    errorStatus,
    updateErrorStatus,
  };
};

export default useCardHolderName;
