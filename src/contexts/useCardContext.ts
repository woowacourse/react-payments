import { useContext } from 'react';
import { CardListContext } from '@providers/CardListContextProvider';

export const useCardListContext = () => {
  const context = useContext(CardListContext);

  if (context === undefined) {
    throw new Error(
      'useContext는 반드시 CardListContext.Provider와 함께 사용해야 합니다.'
    );
  }
  return context;
};
