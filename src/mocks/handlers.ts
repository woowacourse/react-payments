import { http, HttpResponse } from 'msw';
import {
  createErrorResponse,
  maskCardNumber,
  validateCardCVC,
  validateCardIssuerCode,
  validateCardNumber,
  validateExpirationDate,
} from './utils';

type CardRequestBody = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

type CardResponseBody = {
  id: string;
  number: string;
  expirationDate: string;
  issuerCode: string;
};

const cards: CardResponseBody[] = [];

export const handlers = [
  http.post(`${import.meta.env.BASE_URL}cards`, async ({ request }) => {
    const body = await request.json() as CardRequestBody;

    if (!validateCardNumber(body.number)) {
      return createErrorResponse('INVALID_CARD_NUMBER');
    }

    if (!validateCardCVC(body.cvc)) {
      return createErrorResponse('INVALID_CVC');
    }

    if (!validateExpirationDate(body.expirationDate)) {
      return createErrorResponse('INVALID_EXPIRATION_DATE');
    }

    if (!validateCardIssuerCode(body.issuerCode)) {
      return createErrorResponse('INVALID_ISSUER_CODE');
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

  http.get(`${import.meta.env.BASE_URL}cards`, () => HttpResponse.json(cards, { status: 200 })),

  http.delete(`${import.meta.env.BASE_URL}cards/:id`, ({ params }) => {
    const cardIndex = cards.findIndex((card) => card.id === params.id);

    if (cardIndex >= 0) cards.splice(cardIndex, 1);

    return new HttpResponse(null, { status: 204 });
  }),
];
