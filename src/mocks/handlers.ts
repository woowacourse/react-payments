import { http, HttpResponse } from 'msw';
import { CardListResponse, RegisterCardRequest, RegisterCardResponse } from '../apis/cards';
import { cardDB } from './db';

export const handlers = [
  http.get('*/cards', () => {
    const list: CardListResponse = cardDB
      .list()
      .map(({ id, issuerCode, number, expirationDate }) => ({
        id,
        issuerCode,
        number,
        expirationDate,
      }));
    return HttpResponse.json(list, { status: 200 });
  }),

  http.post('*/cards', async ({ request }) => {
    const body = (await request.json()) as RegisterCardRequest;
    const created = cardDB.add(body);
    const response: RegisterCardResponse = { id: created.id };
    return HttpResponse.json(response, { status: 201 });
  }),

  http.delete<{ id: string }>('*/cards/:id', ({ params }) => {
    cardDB.remove(params.id);
    return new HttpResponse(null, { status: 204 });
  }),
];
