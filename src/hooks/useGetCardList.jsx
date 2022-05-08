import { useEffect, useState } from 'react';

import { getCardsFetcher } from 'utils/fetcher';

export default function useGetCardList() {
  const [cardList, setCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCards() {
      try {
        const cards = await getCardsFetcher();

        setCardList(cards.data);
        setIsLoading(false);
      } catch (err) {
        if (err.message === 'Failed to fetch') {
          alert('현재 홈페이지 사용이 불가능합니다. 관리자에게 문의 바랍니다.');

          return;
        }
        alert(err);
      }
    }

    getCards();
  }, []);

  return { cardList, isLoading };
}
