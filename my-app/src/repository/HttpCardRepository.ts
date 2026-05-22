import type { Card, SendingData } from '../types/card';
import type { CardRepository } from './CardRepository';

export class HttpCardRepository implements CardRepository {
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
    
    if (!response.ok) {
      try {
        const errorData = await response.json();
        throw errorData;
      } catch (error) {
        throw new Error('서버 통신에 에러가 발생했습니다!');
      }
    }

    return response.json();
  }

  async deleteCard(id: string): Promise<void> {
    const response = await fetch(`${this.API_BASE}cards/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('카드 삭제에 실패했습니다.');
  }
}
