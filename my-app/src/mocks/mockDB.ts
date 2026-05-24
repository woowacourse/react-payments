import type { CardResponse } from '../types/card';

export const cards: CardResponse[] = [];

export function maskCardNumber(cardNumber: string): string {
  return `${cardNumber.slice(0, 6)}******${cardNumber.slice(-4)}`;
}
