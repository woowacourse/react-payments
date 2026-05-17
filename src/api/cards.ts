import type { Card, CardFormInfoType } from '../domain/card/types/card';

export const getCards = async (): Promise<Card[]> => {
  const response = await fetch('/cards');

  if (!response.ok) throw new Error('카드 목록을 불러오지 못했습니다.');

  return response.json();
};

export const postCard = async (
  cardFormInfo: CardFormInfoType,
): Promise<Card> => {
  const response = await fetch('/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cardFormInfo),
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return response.json();
};
