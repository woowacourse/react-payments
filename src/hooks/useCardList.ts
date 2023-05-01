import { useContext } from 'react';
import { CardListContext } from '../components/providers/CardListProvider';

export const useCardList = () => {
  return useContext(CardListContext);
};
