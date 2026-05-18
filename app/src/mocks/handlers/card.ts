import { http, HttpResponse } from 'msw';
import type { Card } from '../../types/card';
import { db } from '../db';

const serverBaseUrl = 'https://api.example.com';

export const cardHandlers = [
  http.get(`${serverBaseUrl}/cards`, () => {
    return HttpResponse.json(db.cards);
  }),

  http.post(`${serverBaseUrl}/cards`, async ({ request }) => {
    const body = (await request.json()) as Omit<Card, 'id'>;
    const newCard = { id: crypto.randomUUID(), ...body };
    db.cards.push(newCard);
    return HttpResponse.json(newCard, { status: 201 });
  }),

  http.delete(`${serverBaseUrl}/cards/:id`, ({ params }) => {
    const { id } = params;
    const updatedCard = db.cards.filter((card) => card.id !== id);
    db.cards = updatedCard;
    return new HttpResponse(null, { status: 204 });
  }),
];
