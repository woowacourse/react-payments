import { useEffect, useState } from 'react';

const useAutoMoveIndex = (defaultIndex: number, validationList: boolean[]) => {
  const [index, setIndex] = useState(defaultIndex);

  useEffect(() => {
    if (validationList.some(Boolean)) {
      const nextIndex = defaultIndex + validationList.filter(Boolean).length;
      handleIndex(nextIndex);
    }
  }, [validationList]);

  const handleIndex = (nextIndex: number) => nextIndex > index && setIndex(nextIndex);

  return { moveIndex: index };
};

export default useAutoMoveIndex;
