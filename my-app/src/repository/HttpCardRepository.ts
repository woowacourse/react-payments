import type { CardRepositoryShell } from './CardRepositoryShell';

export interface SendingData {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

export interface Card {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

export class HttpCardRepository implements CardRepositoryShell {
  private API_BASE = import.meta.env.BASE_URL;

  async getCards(): Promise<Card[]> {
    const response = await fetch(`${this.API_BASE}cards`);
    if (!response.ok) throw new Error('카드 목록 불러오기 실패!');
    return response.json();
  }

  async postCard(sendingData: SendingData): Promise<{ id: string }> {
    const response = await fetch(`${this.API_BASE}cards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendingData),
    });
    const data = await response.json();
    if (!response.ok) throw data;
    return data;
  }

  async deleteCard(id: string): Promise<void> {
    const response = await fetch(`${this.API_BASE}cards/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('카드 삭제에 실패했습니다.');
  }
}
