import type { Card } from '../types/card';
import { request } from './client';

export async function getCards() {
  const response = await request('/cards');
  return response.json();
}

export async function postCard(newCard: Omit<Card, 'id'>) {
  const response = await request('/cards', {
    method: 'POST',
    body: JSON.stringify(newCard),
  });
  return response.json();
}

export async function deleteCard(id: string) {
  await request(`/cards/${id}`, { method: 'DELETE' });
}
