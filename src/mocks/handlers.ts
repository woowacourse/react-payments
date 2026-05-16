import { http, HttpResponse } from 'msw';
import { CARD_BRANDS } from '../constants/constants';

let cards = [
  {
    id: '1',
    cardNumber: '4111111111111111',
    cardPassword: '12',
    cvc: '123',
    expireDate: '11/27',
    cardBrand: 'BC',
  },
];
let nextId = 2;

export const handlers = [
  http.get('/cards', () => {
    return HttpResponse.json(cards);
  }),

  http.post('/cards', async ({ request }) => {
    const body = (await request.json()) as (typeof cards)[number];

    if (!(body.cardBrand in CARD_BRANDS)) {
      return HttpResponse.json(
        { code: 'cardBrand', message: '지원하지 않는 카드사입니다' },
        { status: 400 }
      );
    }

    const card = { ...body, id: String(nextId++) };
    cards.push(card);
    return HttpResponse.json(card, { status: 201 });
  }),

  http.delete('/cards/:id', ({ params }) => {
    cards = cards.filter((c) => c.id !== params.id);
    return new HttpResponse(null, { status: 204 });
  }),
];
