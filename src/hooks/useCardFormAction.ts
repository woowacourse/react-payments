import { useContext } from 'react';

import { CardFormActionContext } from '../contexts/CardFormContext';

const useCardFormAction = () => {
  const action = useContext(CardFormActionContext);

  if (action === null || action === undefined) {
    throw new Error('useCardFormActions must be used in CardFormProvider');
  }

  return action;
};

export default useCardFormAction;
