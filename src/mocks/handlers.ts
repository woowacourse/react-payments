import { http, HttpResponse } from 'msw';
import type { RegisterCardRequest } from '../types/api';
import { db } from './db';

export const handlers = [
  http.get('/cards', () => {
    return HttpResponse.json(db.getCards());
  }),

  http.post('/cards', async ({ request }) => {
    const body = (await request.json()) as RegisterCardRequest;

    if (!body.cardNumbers || body.cardNumbers.join('').length === 0) {
      return HttpResponse.json(
        { code: 'cardNumbers', message: '카드 번호를 입력해주세요.' },
        { status: 400 },
      );
    }

    if (!body.cvc || body.cvc.length < 3) {
      return HttpResponse.json(
        { code: 'cvc', message: 'CVC 번호는 3자리여야 합니다.' },
        { status: 400 },
      );
    }

    const card = db.addCard({
      id: crypto.randomUUID(),
      cardNumbers: body.cardNumbers,
      cardCompany: body.cardCompany,
      expiryDate: body.expiryDate,
    });

    return HttpResponse.json(card, { status: 201 });
  }),
];
