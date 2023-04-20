import { useEffect, useState } from 'react';
import { CardInputValidation } from '../types';

const useFormComplete = (validationInformation: CardInputValidation) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsComplete(Object.values(validationInformation).every(Boolean));
  }, [validationInformation]);

  return isComplete;
};

export { useFormComplete };
