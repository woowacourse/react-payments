import { getApiUrl } from '@/core/lib/getBaseUrl';
import type {
  CardListResponse,
  DeleteCardResponse,
  RegisterCardErrorResponse,
  RegisterCardRequest,
  RegisterCardResponse,
} from '@/entities/card/model/card';

export const isRegisterCardErrorResponse = (error: unknown): error is RegisterCardErrorResponse => {
  if (error === null || typeof error !== 'object') return false;

  return 'code' in error && 'message' in error;
};

export const registerCard = async (payload: RegisterCardRequest): Promise<RegisterCardResponse> => {
  const response = await fetch(getApiUrl('/cards'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.status === 201) {
    return response.json() as Promise<RegisterCardResponse>;
  }

  if (response.status === 400) {
    const error = (await response.json()) as RegisterCardErrorResponse;
    throw error;
  }

  throw new Error('카드 등록에 실패했습니다.');
};

export const getCards = async (): Promise<CardListResponse> => {
  const response = await fetch(getApiUrl('/cards'));

  if (!response.ok) {
    throw new Error('카드 목록을 불러오지 못했습니다.');
  }

  return response.json() as Promise<CardListResponse>;
};

export const deleteCard = async (id: string): Promise<DeleteCardResponse> => {
  const response = await fetch(getApiUrl(`/cards/${id}`), {
    method: 'DELETE',
  });

  if (response.status !== 204) {
    throw new Error('카드 삭제에 실패했습니다.');
  }
};
