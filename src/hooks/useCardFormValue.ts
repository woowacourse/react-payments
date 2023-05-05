import { useContext } from 'react';

import { CardFormValueContext } from '../contexts/CardFormContext';

const useCardFormValue = () => {
  const value = useContext(CardFormValueContext);

  if (value === null || value === undefined) {
    throw new Error('useCardFormValue must be used in CardFormProvider');
  }

  return value;
};

export default useCardFormValue;
