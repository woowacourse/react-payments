import { http, HttpResponse } from 'msw';

const cards = [
  {
    id: '1',
    cardNumbers: ['1111', '2222', '3333', '4444'],
    expiryMonth: '01',
    expiryYear: '40',
    cardCompanyId: 'bc',
  },
  {
    id: '2',
    cardNumbers: ['1234', '1234', '1234', '1234'],
    expiryMonth: '05',
    expiryYear: '50',
    cardCompanyId: 'shinhan',
  },
];

export const cardHandlers = [
  // GET 요청 모킹
  http.get('/cards', () => {
    return HttpResponse.json(cards);
  }),

  // POST 요청 모킹
  http.post('/cards', async ({ request }) => {
    const body = await request.json();

    return HttpResponse.json(body, { status: 201 });
  }),

  // DELETE 요청 모킹
  http.delete('/cards/:id', ({ params }) => {
    const cardId = String(params.id);
    const targetCardIndex = cards.findIndex((card) => card.id === cardId);

    if (targetCardIndex === -1) {
      return HttpResponse.json(
        { code: 'CARD_NOT_FOUND', message: '카드를 찾을 수 없습니다.' },
        { status: 404 },
      );
    }

    cards.splice(targetCardIndex, 1);

    return new HttpResponse(null, { status: 204 });
  }),
];
