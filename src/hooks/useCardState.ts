import { useEffect, useState } from 'react';
import { SetCallback } from '../types';

import handleLocalStorage from '../utils/handleLocalStorage';

const useCardState = <T>() => {
  const [localData, setLocalData] = handleLocalStorage<T>('react-payments-card-info');
  const [cardList, setState] = useState<T[]>(localData);

  useEffect(() => {
    setLocalData(cardList);
  }, [cardList]);

  const setCardList = (callback: SetCallback<T>) => {
    setState(callback);
  };

  return [cardList, setCardList] as const;
};

export default useCardState;
