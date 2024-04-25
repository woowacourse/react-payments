import { useEffect, useState } from 'react';

const useAutoMoveIndex = (defaultIndex: number, validationList: boolean[]) => {
  const [index, setIndex] = useState(defaultIndex);

  useEffect(() => {
    validationList.some(Boolean) && handleIndex(defaultIndex + validationList.filter(Boolean).length);
  }, [validationList]);

  const handleIndex = (nextIndex: number) => nextIndex > index && setIndex(nextIndex);

  return { moveIndex: index };
};

export default useAutoMoveIndex;
