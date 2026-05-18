import { http, HttpResponse } from 'msw';
import type { Card } from '../../types/card';
import { db } from '../db';
import { BrandValidator } from '../../validators/BrandValidator';
import { Validator } from '../../validators/CardValidator';

const serverBaseUrl = 'https://api.example.com';

export const cardHandlers = [
  http.get(`${serverBaseUrl}/cards`, () => {
    const newCard = db.cards.map((card) => ({
      ...card,
      number: card.number.substring(0, 6) + '******' + card.number.substring(12),
    }));

    return HttpResponse.json(newCard, { status: 200 });
  }),

  http.post(`${serverBaseUrl}/cards`, async ({ request }) => {
    const body = (await request.json()) as Omit<Card, 'id'>;

    const brandResult = BrandValidator.detectNetworkBrand(body.number);
    if (!brandResult.valid) {
      return HttpResponse.json(
        {
          code: 'INVALID_CARD_NUMBER',
          message: '유효하지 않은 카드 번호입니다.',
        },
        { status: 400 },
      );
    }

    if (body.cvc === '000') {
      return HttpResponse.json(
        {
          code: 'INVALID_CVC',
          message: '유효하지 않은 CVC입니다.',
        },
        { status: 400 },
      );
    }

    const [month, year] = body.expirationDate.split('/');
    const expiryResult = Validator.isValidCardExpiryDate(month, year);
    if (!expiryResult.valid) {
      return HttpResponse.json(
        { code: 'INVALID_EXPIRATION_DATE', message: '유효하지 않은 만료일입니다.' },
        { status: 400 },
      );
    }

    const newCard = { id: crypto.randomUUID(), ...body };
    db.cards.push(newCard);
    return HttpResponse.json({ id: newCard.id }, { status: 201 });
  }),

  http.delete(`${serverBaseUrl}/cards/:id`, ({ params }) => {
    const { id } = params;
    const updatedCard = db.cards.filter((card) => card.id !== id);
    db.cards = updatedCard;
    return new HttpResponse(null, { status: 204 });
  }),
];
