import { Card, SetCardList } from '../types/state';
import { generateCardKey } from '../domains/keyGenerator';

export const useUpdateCardList = (card: Card, setCardList: SetCardList) => {
  const updateCardList = () => {
    setCardList(prev => {
      const key = generateCardKey(card);

      return {
        ...prev,
        [key]: card,
      };
    });
  };

  return updateCardList;
};
