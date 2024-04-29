import { useState } from 'react';

export interface ShowNextFieldConditionParams {
  isFill: boolean;
  isFieldError: boolean;
  nextIndex: number;
}

const useCreateNextField = () => {
  const [isFieldShowCount, setIsFieldShowCount] = useState<number>(0);

  const showNextFieldOnValid = (params: ShowNextFieldConditionParams) => {
    const { isFill, isFieldError, nextIndex } = params;
    if (isFill && !isFieldError) {
      setIsFieldShowCount((prev) => Math.max(prev, nextIndex));
    }
  };

  return {
    isFieldShowCount,
    showNextFieldOnValid,
  };
};

export default useCreateNextField;
