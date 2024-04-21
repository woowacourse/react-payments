import { useState } from 'react';
import useValidations from './useValidations';
import { inquireCardNumber } from '../inquiry';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const { errorStatus, updateErrorStatus } = useValidations(cardNumbers, inquireCardNumber);

  return {
    data: cardNumbers,
    setData: setCardNumbers,
    errorStatus,
    updateErrorStatus,
  };
};

export default useCardNumbers;
