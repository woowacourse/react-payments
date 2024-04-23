import { useState } from 'react';
import useValidation from './useValidation';
import validateCvc from '../validators/validateCvc';

const useCvc = () => {
  const [cvc, setCvc] = useState('');
  const { errorStatus, updateErrorStatus } = useValidation(cvc, validateCvc);

  return {
    data: cvc,
    setData: setCvc,
    errorStatus,
    updateErrorStatus,
  };
};

export default useCvc;
