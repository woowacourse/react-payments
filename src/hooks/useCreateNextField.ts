import { useState } from 'react';

export interface ShowNextFieldOnLastElementBlurParams {
  isFill: boolean;
  isFieldError: boolean;
  nextIndex: number;
}

const useCreateNextField = () => {
  const [isFieldShowCount, setIsFieldShowCount] = useState<number>(0);

  const showNextFieldOnLastElementBlur = (params: ShowNextFieldOnLastElementBlurParams) => {
    const { isFill, isFieldError, nextIndex } = params;
    if (isFill && !isFieldError) {
      setIsFieldShowCount((prev) => Math.max(prev, nextIndex));
    }
  };

  return {
    isFieldShowCount,
    showNextFieldOnLastElementBlur,
  };
};

export default useCreateNextField;
