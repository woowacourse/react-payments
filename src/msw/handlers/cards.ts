import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS } from '../../api/cards';

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

const VALID_ISSUER_CODES = new Set(['31', '41', '15', '61', 'W1', '71', '21', '11']);

const isValidIssuerCode = (issuerCode: string) => VALID_ISSUER_CODES.has(issuerCode);

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

const FIXTURE_CARDS = [
  { issuerCode: '31', number: '5511' + '12' + '34'.repeat(3) + '9012', expirationDate: '12/28' },
  { issuerCode: '41', number: '4111' + '11'.repeat(4) + '1111', expirationDate: '06/30' },
  { issuerCode: '15', number: '5234' + '12'.repeat(3) + '7890', expirationDate: '09/27' },
] as const;

const createInitialCards = (): Card[] =>
  FIXTURE_CARDS.map((fixture) => ({
    id: crypto.randomUUID(),
    issuerCode: fixture.issuerCode,
    number: maskCardNumber(fixture.number),
    expirationDate: fixture.expirationDate,
  }));

const db: Card[] = createInitialCards();

export const resetCards = () => {
  db.splice(0, db.length, ...createInitialCards());
};

export const cardsHandlers = [
  http.post(API_ENDPOINTS.cards, async ({ request }) => {
    const body = (await request.json()) as CardRequest;

    if (!isValidIssuerCode(body.issuerCode)) {
      return HttpResponse.json(
        { code: 'INVALID_ISSUER_CODE', message: '지원하지 않는 카드사입니다.' },
        { status: 400 },
      );
    }

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

  http.get(API_ENDPOINTS.cards, () => {
    return HttpResponse.json(db);
  }),

  http.delete(API_ENDPOINTS.card(':id'), ({ params }) => {
    const index = db.findIndex((card) => card.id === params.id);
    if (index !== -1) db.splice(index, 1);
    return new HttpResponse(null, { status: 204 });
  }),
];
