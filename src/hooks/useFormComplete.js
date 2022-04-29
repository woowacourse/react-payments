import { useEffect, useState } from 'react';
export const useFormComplete = (state, validateFunction) => {
  const isStateObjectOrArray = typeof state === 'object';

  const deps = isStateObjectOrArray ? Object.values(state) : [state];

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
  }, [...deps]);

  return isComplete;
};
