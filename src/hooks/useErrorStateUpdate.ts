import { useState } from 'react';

const useErrorArrayState = (length: number, onAllValid?: () => void) => {
  const [errorState, setErrorState] = useState(() => Array(length).fill(false));

  const updateErrorState = (idx: number, hasError: boolean) => {
    setErrorState((prev) => {
      const updated = [...prev];
      updated[idx] = hasError;

      const allValid = updated.every((error) => !error);
      if (!hasError && allValid && onAllValid) {
        onAllValid();
      }

      return updated;
    });
  };

  return {
    errorState,
    updateErrorState,
  };
};

export default useErrorArrayState;
