import type { CardResponse } from '../types/cardStausTypes';

export async function requestCards(signal: AbortSignal): Promise<CardResponse[]> {
  const response = await fetch('/api/cards', {
    signal,
  });

  if (!response.ok) {
    throw new Error('카드 목록을 불러오지 못했습니다.');
  }

  const data: CardResponse[] = await response.json();

  return data;
}
