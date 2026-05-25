import type { CardRequest } from '../types/cardStausTypes';
import { HttpError, NetworkError } from '../errors/errors';

type ErrorResponse = {
  code: string;
  message: string;
};

type PostCardResponse = {
  id: string;
};

export async function postCard(cardInfo: CardRequest): Promise<PostCardResponse> {
  let response: Response;

  try {
    response = await fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        number: cardInfo.number,
        expirationDate: cardInfo.expirationDate,
        cvc: cardInfo.cvc,
        issuerCode: cardInfo.issuerCode,
      }),
    });
  } catch {
    throw new NetworkError('네트워크 연결에 실패했습니다.');
  }

  if (!response.ok) {
    const errorData = (await response.json()) as ErrorResponse;
    throw new HttpError(errorData.message, errorData.code);
  }
  return response.json();
}
