import { useContext } from 'react';

import { FinishValueContext } from '../contexts/FinishContext';

const useFinishValue = () => {
  const value = useContext(FinishValueContext);

  if (value === null || value === undefined) {
    throw new Error('useFinishValue must be used in FinishProvider');
  }

  return value;
};

export default useFinishValue;
