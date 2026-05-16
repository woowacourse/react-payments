import type { Card } from '../domain/card/types/card';

export const getCards = async (): Promise<Card[]> => {
  const response = await fetch('/cards');

  if (!response.ok) throw new Error('카드 목록을 불러오지 못했습니다.');

  return response.json();
};
