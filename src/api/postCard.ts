import type { CardInfo } from '../types/cardStausTypes';

type ErrorResponse = {
  code: string;
  message: string;
};

export async function postCard(cardInfo: CardInfo): Promise<string> {
  const response = await fetch('/api/cards', {
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

  if (!response.ok) {
    const errorData = (await response.json()) as ErrorResponse;
    throw new Error(errorData.message);
  }
  return response.json();
}
