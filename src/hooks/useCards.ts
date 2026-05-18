import { useState } from 'react';
import type { Card } from '../types/card';
import { fetchCards, deleteCard } from '../api/cards';

type State = 'idle' | 'loading' | 'success' | 'error';

export function useCards() {
  const [state, setState] = useState<State>('idle');
  const [cards, setCards] = useState<Card[]>([]);

  const loadCards = async (signal?: AbortSignal) => {
    setState('loading');
    try {
      const data = await fetchCards(signal);
      setCards(data);
      setState('success');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      setState('error');
    }
  };

  const remove = async (id: string) => {
    try {
      if (!window.confirm('이 카드를 삭제하시겠습니까?')) return;
      await deleteCard(id);
      setCards((prev) => prev.filter((card) => card.id !== id));
    } catch {
      setState('error');
    }
  };

  return { state, cards, loadCards, remove };
}
