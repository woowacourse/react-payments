import { useContext } from 'react';
import { CardInputInfoContext } from '@providers/CardInputInfoProvider';

export const useCardInputInfoContext = () => {
  const context = useContext(CardInputInfoContext);

  if (context === undefined) {
    throw new Error(
      'useContext는 반드시 CardInputInfoContext.Provider와 함께 사용해야 합니다.'
    );
  }
  return context;
};
