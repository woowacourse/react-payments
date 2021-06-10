import { useEffect, useState } from 'react';
import { getCards } from '../service/card';

const useCard = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(async () => {
    setCardList(await getCards());
  }, [cardList]);

  return { cardList };
};

export default useCard;
