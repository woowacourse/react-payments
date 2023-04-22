import { useEffect, useState } from 'react';

const useFormComplete = <T extends Record<string, boolean>>(validationInformation: T) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsComplete(Object.values(validationInformation).every(Boolean));
  }, [validationInformation]);

  return isComplete;
};

export { useFormComplete };
