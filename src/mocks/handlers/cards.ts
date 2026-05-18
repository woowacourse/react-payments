import { validateCardNumber } from '@/entities/card/model/cardNumber';
import { http, HttpResponse } from 'msw';

import type {
  Card,
  RegisterCardErrorResponse,
  RegisterCardRequest,
  RegisterCardResponse,
} from '@/entities/card/model/card';

const cards: Card[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    issuerCode: '31',
    number: '5511********9012',
    expirationDate: '12/28',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    issuerCode: '41',
    number: '4111********1111',
    expirationDate: '06/30',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    issuerCode: '15',
    number: '5234********7890',
    expirationDate: '09/27',
  },
];

const registerCardError = (code: RegisterCardErrorResponse['code'], message: string): Response => {
  return HttpResponse.json({ code, message }, { status: 400 });
};

const isValidExpirationDate = (expirationDate: string): boolean => {
  return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate);
};

const maskCardNumber = (number: string): string => {
  return `${number.slice(0, 6)}******${number.slice(-4)}`;
};

export const cardsHandlers = [
  http.get('*/cards', () => {
    return HttpResponse.json<Card[]>(cards, { status: 200 });
  }),

  http.post('*/cards', async ({ request }) => {
    const card = (await request.json()) as RegisterCardRequest;

    if (!validateCardNumber(card.number)) {
      return registerCardError('INVALID_CARD_NUMBER', '유효하지 않은 카드 번호입니다.');
    }

    if (card.cvc === '000') {
      return registerCardError('INVALID_CVC', '유효하지 않은 CVC입니다.');
    }

    if (!isValidExpirationDate(card.expirationDate)) {
      return registerCardError('INVALID_EXPIRATION_DATE', '유효하지 않은 만료일입니다.');
    }

    const id = crypto.randomUUID();

    cards.push({
      id,
      issuerCode: card.issuerCode,
      number: maskCardNumber(card.number),
      expirationDate: card.expirationDate,
    });

    return HttpResponse.json<RegisterCardResponse>({ id }, { status: 201 });
  }),

  http.delete('*/cards/:id', ({ params }) => {
    const id = String(params.id);
    const index = cards.findIndex((card) => card.id === id);

    if (index !== -1) {
      cards.splice(index, 1);
    }

    return new HttpResponse(null, { status: 204 });
  }),
];
