import { useEffect, useState } from 'react';

const useMoveNextInput = (defaultIndex: number, validationList: boolean[]) => {
  const [index, setIndex] = useState(defaultIndex);

  useEffect(() => {
    validationList.some(Boolean) && handleIndex(defaultIndex - validationList.filter(Boolean).length);
  }, [validationList]);

  const handleIndex = (nextIndex: number) => nextIndex < index && setIndex(nextIndex);

  return { inputComponentIndex: index, handleInputComponentIndex: handleIndex };
};

export default useMoveNextInput;
