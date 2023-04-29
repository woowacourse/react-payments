import { useContext } from 'react';
import { CardListContext } from '../components/provider/CardListProvider';

export const useCardList = () => {
  return useContext(CardListContext);
};
