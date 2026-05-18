import { http, HttpResponse } from 'msw';

type CardRequest = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

type Card = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
};

const VALID_BIN_PATTERNS = [
  /^4/, // Visa
  /^5[1-5]/, // Mastercard
  /^3[47]/, // AMEX
  /^36/, // Diners
  /^62212[6-9]|^6221[3-9]\d|^622[2-9]\d{2}|^62[3-9]\d{3}|^6282|^6288/, // UnionPay
];

const isValidBin = (number: string) => VALID_BIN_PATTERNS.some((pattern) => pattern.test(number));

const isValidExpirationDate = (expirationDate: string) => {
  const match = expirationDate.match(/^(\d{2})\/\d{2}$/);
  if (!match) return false;
  const month = Number(match[1]);
  return month >= 1 && month <= 12;
};

const maskCardNumber = (number: string) => `${number.slice(0, 6)}******${number.slice(-4)}`;

const db: Card[] = [];

export const cardsHandlers = [
  http.post('/cards', async ({ request }) => {
    const body = (await request.json()) as CardRequest;

    if (!isValidBin(body.number)) {
      return HttpResponse.json(
        { code: 'INVALID_CARD_NUMBER', message: '유효하지 않은 카드 번호입니다.' },
        { status: 400 },
      );
    }

    if (body.cvc === '000') {
      return HttpResponse.json({ code: 'INVALID_CVC', message: '유효하지 않은 CVC입니다.' }, { status: 400 });
    }

    if (!isValidExpirationDate(body.expirationDate)) {
      return HttpResponse.json(
        { code: 'INVALID_EXPIRATION_DATE', message: '유효하지 않은 만료일입니다.' },
        { status: 400 },
      );
    }

    const card: Card = {
      id: crypto.randomUUID(),
      issuerCode: body.issuerCode,
      number: maskCardNumber(body.number),
      expirationDate: body.expirationDate,
    };
    db.push(card);

    return HttpResponse.json({ id: card.id }, { status: 201 });
  }),

  http.get('/cards', () => {
    return HttpResponse.json(db);
  }),

  http.delete('/cards/:id', ({ params }) => {
    const index = db.findIndex((card) => card.id === params.id);
    if (index !== -1) db.splice(index, 1);
    return new HttpResponse(null, { status: 204 });
  }),
];
