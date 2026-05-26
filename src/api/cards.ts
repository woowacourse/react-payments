import type { Card } from '../types/card';

export type CardRequest = Omit<Card, 'id'>;

export type CreateCardResult =
  | { ok: true; card: Card }
  | { ok: false; error: { code: keyof CardRequest; message: string } };

export const fetchCards = async (signal?: AbortSignal): Promise<Card[]> => {
  const response = await fetch('/cards', { signal });

  if (!response.ok) throw new Error('카드 목록을 불러오지 못했습니다');

  return response.json();
};

export const deleteCard = async (id: string): Promise<void> => {
  const response = await fetch(`/cards/${id}`, { method: 'DELETE' });

  if (!response.ok) throw new Error('카드 삭제에 실패했습니다');
};

export const createCard = async (body: CardRequest): Promise<CreateCardResult> => {
  const response = await fetch('/cards', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (response.status === 201) {
    return { ok: true, card: await response.json() };
  }

  if (response.status === 400) {
    return { ok: false, error: await response.json() };
  }

  throw new Error('알 수 없는 응답');
};
