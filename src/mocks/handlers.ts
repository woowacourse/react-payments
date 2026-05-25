import { http, HttpResponse } from 'msw';
import { ApiError, Card, CreateCardRequest } from '../types';
import { detectCardBrand } from '../utils/cardBrand';
import { BASE_PATH } from '../constants';

let cards: Card[] = [];

const validateCreateCardRequest = (body: CreateCardRequest): ApiError | null => {
  if (detectCardBrand(body.number) === 'NONE') {
    return { code: 'INVALID_CARD_NUMBER', message: '유효하지 않은 카드 번호입니다.' };
  }
  if (body.cvc === '000') {
    return { code: 'INVALID_CVC', message: '유효하지 않은 CVC입니다.' };
  }

  const [mm] = body.expirationDate.split('/');
  const month = Number(mm);
  if (!/^\d{2}\/\d{2}$/.test(body.expirationDate) || month < 1 || month > 12) {
    return { code: 'INVALID_EXPIRATION_DATE', message: '유효하지 않은 만료일입니다.' };
  }

  return null;
};

const maskCardNumber = (cardNumber: string): string => {
  if (cardNumber.length < 10) return cardNumber;
  const head = cardNumber.slice(0, 6);
  const tail = cardNumber.slice(-4);
  const middle = '*'.repeat(cardNumber.length - head.length - tail.length);
  return `${head}${middle}${tail}`;
};

export const handlers = [
  http.get(`${BASE_PATH}/cards`, () => {
    return HttpResponse.json(cards);
  }),

  http.post(`${BASE_PATH}/cards`, async ({ request }) => {
    const body = (await request.json()) as CreateCardRequest;

    const error = validateCreateCardRequest(body);

    if (error) {
      return HttpResponse.json(error, { status: 400 });
    }

    const newCard: Card = {
      id: crypto.randomUUID(),
      issuerCode: body.issuerCode,
      number: maskCardNumber(body.number),
      expirationDate: body.expirationDate,
    };
    cards.push(newCard);
    return HttpResponse.json({ id: newCard.id }, { status: 201 });
  }),

  http.delete(`${BASE_PATH}/cards/:id`, ({ params }) => {
    cards = cards.filter((card) => card.id !== params.id);
    return new HttpResponse(null, { status: 204 });
  }),
];
