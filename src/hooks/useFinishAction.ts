import { useContext } from 'react';

import { FinishActionContext } from '../contexts/FinishContext';

const useFinishAction = () => {
  const finishWork = useContext(FinishActionContext);

  if (finishWork === null || finishWork === undefined) {
    throw new Error('useFinishAction must be used in FinishProvider');
  }

  return finishWork;
};

export default useFinishAction;
