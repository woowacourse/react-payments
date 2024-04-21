import { useState } from 'react';
import useValidations from './useValidations';
import { validateCardNumber } from '../validators';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const { errorStatus, updateErrorStatus } = useValidations(cardNumbers, validateCardNumber);

  return {
    data: cardNumbers,
    setData: setCardNumbers,
    errorStatus,
    updateErrorStatus,
  };
};

export default useCardNumbers;
