import type { CardInfo } from '../types/cardStausTypes';

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
    throw new Error('카드 등록에 실패했습니다.');
  }
  return response.json();
}
