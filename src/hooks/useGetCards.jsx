import { useEffect, useState } from 'react';

import { getCardsFetcher } from 'utils/fetcher';

export default function useGetCards() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    async function getCards() {
      try {
        const cards = await getCardsFetcher();

        setCardList(cards.data);
      } catch (err) {
        alert(err);
      }
    }

    getCards();
  }, []);

  return cardList;
}
