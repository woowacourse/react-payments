import type { ApiError, CardResponse, RegisterCardRequest } from '../types/api';

export async function postCard(body: RegisterCardRequest): Promise<CardResponse> {
  const res = await fetch('/cards', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error: ApiError = await res.json();
    throw error;
  }

  return res.json();
}

export async function getCards(): Promise<CardResponse[]> {
  const res = await fetch('/cards');

  if (!res.ok) {
    throw new Error('카드 목록을 불러오지 못했습니다.');
  }

  return res.json();
}
