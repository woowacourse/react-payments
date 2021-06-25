import { useEffect, useState } from 'react';

import { getCards } from '../service/card';

const useCard = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const loadCards = async () => {
      const cards = await getCards();
      setCardList(cards);
    };

    loadCards();
  }, []);

  return { cardList };
};

export default useCard;
