import { useState } from 'react';

const useErrorArrayState = (length: number, onAllValid?: () => void) => {
  const [isError, setIsError] = useState<boolean[]>(() => Array(length).fill(false));

  const updateErrorState = (idx: number, hasError: boolean) => {
    setIsError((prev) => {
      const updated = [...prev];
      updated[idx] = hasError;

      const allValid = updated.every((error) => error === false);
      if (!hasError && allValid && onAllValid) {
        onAllValid();
      }

      return updated;
    });
  };

  return {
    isError,
    updateErrorState,
  };
};

export default useErrorArrayState;
