import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const controller = new AbortController();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCards(controller.signal);

    return () => controller.abort();
  }, []);

  const remove = async (id: string) => {
    try {
      await deleteCard(id);
      setCards((prev) => prev.filter((card) => card.id !== id));
    } catch {
      setState('error');
    }
  };

  return { state, cards, loadCards, remove };
}
