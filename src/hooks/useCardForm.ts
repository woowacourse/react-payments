import { useContext } from 'react';

import { CardFormContext } from '@/context/cardFormContext';

export const useCardForm = () => {
  return useContext(CardFormContext);
};
