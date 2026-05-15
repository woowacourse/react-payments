import {useEffect, useState} from 'react';

import {deleteCard, getCards} from '@/api/cardsApi';
import type {CardResponse} from '@/domain/card/cardApi.types';

type CardsState =
  | {status: 'idle'}
  | {status: 'loading'}
  | {status: 'success'; cards: CardResponse[]}
  | {status: 'error'; message: string};

export const useCards = () => {
  const [state, setState] = useState<CardsState>({status: 'idle'});

  // 서버에 저장된 카드 목록을 다시 조회
  const fetchCards = async () => {
    setState({status: 'loading'});

    try {
      const cards = await getCards();
      setState({status: 'success', cards});
    } catch {
      setState({
        status: 'error',
        message: '카드 목록을 불러오지 못했습니다.',
      });
    }
  };

  // 삭제 확인 후 서버 카드 삭제
  const removeCard = async (id: string) => {
    const isConfirmed = window.confirm('카드를 삭제할까요?');

    if (!isConfirmed) return;

    try {
      await deleteCard(id);
      await fetchCards();
    } catch {
      setState({
        status: 'error',
        message: '카드 삭제에 실패했습니다.',
      });
    }
  };

  useEffect(() => {
    // idle 상태를 한 번 거친 뒤 목록 조회 시작 (지금 바로 말고, 이번 턴 끝나자마자 fetchCards 실행)
    Promise.resolve().then(fetchCards);
  }, []);

  return {
    state,
    refetch: fetchCards,
    removeCard,
  };
};
