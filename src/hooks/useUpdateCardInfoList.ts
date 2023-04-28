import { CardInfo, SetCardInfoList } from '../types/state';
import { generateCardKey } from '../domains/keyGenerator';

export const useUpdateCardInfoList = (cardInfo: CardInfo, setCardInfoList: SetCardInfoList) => {
  const updateCardInfoList = () => {
    setCardInfoList(prev => {
      const key = generateCardKey(cardInfo);

      return {
        ...prev,
        [key]: cardInfo,
      };
    });
  };

  return updateCardInfoList;
};
