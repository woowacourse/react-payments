import type { Card, CardFormInfoType } from '../domain/card/types/card';
import { HTTPError, NetworkError } from './error';

export const getCards = async (signal?: AbortSignal): Promise<Card[]> => {
  let response;

  try {
    response = await fetch('/cards', { signal });
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw error;
    }

    throw new NetworkError();
  }

  if (!response.ok) {
    throw new HTTPError(
      response.status,
      'GET_CARDS_FAILED',
      '카드 목록을 불러오지 못했습니다.',
    );
  }

  return response.json();
};

export const postCard = async (
  cardFormInfo: CardFormInfoType,
): Promise<Card> => {
  let response;

  try {
    response = await fetch('/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardFormInfo),
    });
  } catch {
    // 1. 네트워크 에러인 경우
    throw new NetworkError();
  }

  // 2. HTTP 에러인 경우
  if (!response.ok) {
    const error = await response.json();
    throw new HTTPError(response.status, error.code, error.message);
  }

  return response.json();
};

export const deleteCard = async (cardId: string): Promise<void> => {
  let response;

  try {
    response = await fetch(`/cards/${cardId}`, {
      method: 'DELETE',
    });
  } catch {
    throw new NetworkError();
  }

  if (!response.ok) {
    throw new HTTPError(
      response.status,
      'DELETE_CARD_FAILED',
      '카드 삭제에 실패했습니다.',
    );
  }
};
