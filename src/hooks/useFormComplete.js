import { useEffect, useState } from 'react';
export const useFormComplete = (state, validateFunction) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    try {
      if (validateFunction(state)) {
        setIsComplete(true);
      }
    } catch (e) {
      setIsComplete(false);
    }
    return;
  }, [state, validateFunction]);

  return isComplete;
};
