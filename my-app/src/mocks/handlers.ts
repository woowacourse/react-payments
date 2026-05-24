import { http, HttpResponse } from 'msw';
import { cards, maskCardNumber } from './mockDB';
import { getCardBrand } from '../utils/cardBrand';
import type { CreateCardRequest } from '../types/card';

const BASE_URL = 'https://api.example.com';

function isExpired(expirationDate: string) {
  const [month, year] = expirationDate.split('/').map(Number);
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear() % 100;

  return (
    month < 1 ||
    month > 12 ||
    year < currentYear ||
    (year === currentYear && month < currentMonth)
  );
}

export const handlers = [
  http.post(`${BASE_URL}/cards`, async ({ request }) => {
    const body = (await request.json()) as CreateCardRequest;

    if (!getCardBrand(body.number)) {
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

    if (isExpired(body.expirationDate)) {
      return HttpResponse.json(
        {
          code: 'INVALID_EXPIRATION_DATE',
          message: '만료일이 지난 카드입니다.',
        },
        { status: 400 },
      );
    }

    const id = crypto.randomUUID();

    cards.push({
      id,
      issuerCode: body.issuerCode,
      number: maskCardNumber(body.number),
      expirationDate: body.expirationDate,
    });

    return HttpResponse.json({ id }, { status: 201 });
  }),

  http.get(`${BASE_URL}/cards`, () => {
    return HttpResponse.json(cards, { status: 200 });
  }),

  http.delete(`${BASE_URL}/cards/:id`, ({ params }) => {
    const cardIndex = cards.findIndex((card) => card.id === params.id);

    if (cardIndex !== -1) {
      cards.splice(cardIndex, 1);
    }

    return new HttpResponse(null, { status: 204 });
  }),
];
