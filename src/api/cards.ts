import type {
  CardApiError,
  CardFormApiError,
  CardResponse,
  RegisterCardRequest,
  RegisterCardResponse,
} from '../types/api';

function mapCardApiError(error: CardApiError): CardFormApiError {
  const codeByApiCode: Record<CardApiError['code'], CardFormApiError['code']> = {
    INVALID_CARD_NUMBER: 'cardNumbers',
    INVALID_CVC: 'cvc',
    INVALID_EXPIRATION_DATE: 'expiryDate',
  };

  return {
    code: codeByApiCode[error.code],
    message: error.message,
  };
}

export async function postCard(body: RegisterCardRequest): Promise<RegisterCardResponse> {
  const res = await fetch('/cards', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error: CardApiError = await res.json();
    throw mapCardApiError(error);
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

export async function deleteCard(id: string): Promise<void> {
  const res = await fetch(`/cards/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('카드를 삭제하지 못했습니다.');
  }
}
