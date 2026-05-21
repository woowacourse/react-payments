import { http, HttpResponse } from 'msw';
import type { RegisterCardRequest } from '../api/api';
import { db } from './db';
import { getCardBrand } from '../utils/card/cardBrand';

function isValidExpirationDate(expirationDate: string) {
  return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate);
}

function maskCardNumber(number: string) {
  return `${number.slice(0, 6)}******${number.slice(-4)}`;
}

export const handlers = [
  http.get('/cards', () => {
    return HttpResponse.json(db.getCards());
  }),

  http.post('/cards', async ({ request }) => {
    const body = (await request.json()) as RegisterCardRequest;

    if (!/^\d{14,16}$/.test(body.number) || getCardBrand(body.number) === '') {
      return HttpResponse.json(
        { code: 'INVALID_CARD_NUMBER', message: '유효하지 않은 카드 번호입니다.' },
        { status: 400 },
      );
    }

    if (!isValidExpirationDate(body.expirationDate)) {
      return HttpResponse.json(
        { code: 'INVALID_EXPIRATION_DATE', message: '유효하지 않은 만료일입니다.' },
        { status: 400 },
      );
    }

    if (!/^\d{3,4}$/.test(body.cvc) || body.cvc === '000') {
      return HttpResponse.json(
        { code: 'INVALID_CVC', message: '유효하지 않은 CVC입니다.' },
        { status: 400 },
      );
    }

    const card = db.addCard({
      id: crypto.randomUUID(),
      issuerCode: body.issuerCode,
      number: maskCardNumber(body.number),
      expirationDate: body.expirationDate,
    });

    return HttpResponse.json({ id: card.id }, { status: 201 });
  }),

  http.delete('/cards/:id', ({ params }) => {
    db.deleteCard(String(params.id));

    return new HttpResponse(null, { status: 204 });
  }),
];
