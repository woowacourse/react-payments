import { BASE_PATH } from '../constants';
import { ApiError, Card, CreateCardRequest } from '../types';
import { ApiResponseError } from './errors';

export const getCards = async (signal?: AbortSignal): Promise<Card[]> => {
  const res = await fetch(`${BASE_PATH}/cards`, { signal });
  if (!res.ok) throw new Error('카드 목록을 불러올 수 없습니다.');
  return res.json();
};

export const postCard = async (body: CreateCardRequest): Promise<{ id: string }> => {
  const res = await fetch(`${BASE_PATH}/cards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (res.status === 400) {
    const error: ApiError = await res.json();
    throw new ApiResponseError(error);
  }

  if (!res.ok) throw new Error('카드 등록에 실패했습니다.');

  return res.json();
};

export const deleteCard = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_PATH}/cards/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('카드를 삭제하는데 실패했습니다.');
};
