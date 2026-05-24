import type {
  CreateCardRequest,
  CreateCardResponse,
  GetCardListResponse,
} from '../types/card';

export async function getCardList(): Promise<GetCardListResponse> {
  const response = await fetch('https://api.example.com/cards');

  if (!response.ok) {
    throw new Error('카드 목록 요청 실패');
  }

  return await response.json();
}

export async function deleteCardItem(id: string): Promise<void> {
  const response = await fetch(`https://api.example.com/cards/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('카드 삭제 요청 실패');
  }
}

export async function postCardItem(
  card: CreateCardRequest,
): Promise<CreateCardResponse> {
  const response = await fetch('https://api.example.com/cards', {
    method: 'POST',
    body: JSON.stringify(card),
  });

  if (!response.ok) {
    throw await response.json();
  }

  return await response.json();
}
