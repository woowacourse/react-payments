import { http, HttpResponse } from 'msw';
import { cards } from '../../datas/cards.ts';
import type { SCard } from '../../datas/cards.type.ts';

export type SGetCardsResponse = SCard[];

export const handler = http.get(`${import.meta.env.BASE_URL}cards`, async () => {
  return HttpResponse.json(cards.map((card) => ({ ...card, number: maskNumber(card.number) })));
});

const maskNumber = (number: string) => {
  const [first, middle, last] = splitString(number);
  return `${first}${'*'.repeat(middle.length)}${last}`;
};

const splitString = (value: string) => {
  return [value.slice(0, 6), value.slice(6, -4), value.slice(-4)];
};
