import { useEffect, useState } from 'react';
import { delay } from '../utils/delay';
import { getCardList } from '../apis/card';
import type { GetCardListResponse } from '../types/card';

type CardListStatus = 'idle' | 'loading' | 'success' | 'error';

function useGetCardList() {
  const [status, setStatus] = useState<CardListStatus>('idle');
  const [data, setData] = useState<GetCardListResponse>([]);
  const [refetchTrigger, setRefetchTrigger] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCardList() {
      try {
        setStatus('loading');

        await delay(500);
        const cardList = await getCardList();

        setData(cardList);
        setStatus('success');
      } catch {
        setStatus('error');
      }
    }

    fetchCardList();
  }, [refetchTrigger]);

  return {
    status,
    data,
    itemCount: status === 'success' && data.length !== 0 ? data.length : null,
    refetchList: () => {
      setRefetchTrigger((prev) => !prev);
    },
  };
}

export default useGetCardList;
