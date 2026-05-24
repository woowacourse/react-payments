import { http, HttpResponse } from 'msw';

import { BRAND_NUMBER } from '@/pages/payments/register/form/constant';

type Card = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
};

const validateBin = (numbers: unknown) => {
  if (typeof numbers !== 'string') return false;
  const VALID_BIN = Object.values(BRAND_NUMBER)
    .map((brand) => brand.startNumber)
    .flat();
  const isValidBin = VALID_BIN.find((bin) => {
    return numbers?.startsWith(bin);
  });
  return isValidBin;
};

const validateCvc = (cvc: unknown) => {
  const isValidCvc = cvc !== '000';
  return isValidCvc;
};

const validateExpirationDate = (value: unknown): boolean => {
  if (typeof value !== 'string') return false;

  // MM/YY 형식 검사
  const match = value.match(/^(\d{2})\/(\d{2})$/);

  if (!match) {
    return false;
  }

  const [, month, year] = match;

  // MM 범위 검사 (01 ~ 12)
  const monthNumber = Number(month);

  return monthNumber >= 1 && monthNumber <= 12;
};

export function formatMaskCardNumber(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\D/g, '');

  if (cleaned.length < 14 || cleaned.length > 16) {
    throw new Error('올바른 카드 번호 형식이 아닙니다. (14~16자리의 숫자가 필요합니다.)');
  }

  const front = cleaned.slice(0, 6); // 앞 6자리
  const back = cleaned.slice(-4); // 뒤 4자리

  const maskLength = cleaned.length - 10;
  const maskedSection = '*'.repeat(maskLength);

  return `${front}${maskedSection}${back}`;
}

let cards: Card[] = [];

export const handlers = [
  http.post('/cards', async ({ request }) => {
    const data = await request.clone().json();
    // 400 - INVALID_CARD_NUMBER
    const isValidBin = validateBin(data?.number);
    if (!isValidBin) {
      return HttpResponse.json(
        { code: 'INVALID_CARD_NUMBER', message: '유효하지 않은 카드 번호입니다.' },
        { status: 400 },
      );
    }

    // 400 - INVALID_CARD_NUMBER
    const isValidCvc = validateCvc(data?.cvc);
    if (!isValidCvc) {
      return HttpResponse.json({ code: 'INVALID_CVC', message: '유효하지 않은 CVC입니다.' }, { status: 400 });
    }

    // 400 - INVALID_EXPIRATION_DATE
    const isValidExpirationDate = validateExpirationDate(data?.expirationDate);
    if (!isValidExpirationDate) {
      return HttpResponse.json(
        { code: 'INVALID_EXPIRATION_DATE', message: '유효하지 않은 만료일입니다.' },
        { status: 400 },
      );
    }

    cards = [
      ...cards,
      {
        id: crypto.randomUUID(),
        issuerCode: data?.issuerCode,
        number: data?.number,
        expirationDate: data?.expirationDate,
      },
    ];

    // 201
    return HttpResponse.json({ id: crypto.randomUUID() }, { status: 201 });
  }),
  http.get('/cards', () => {
    return HttpResponse.json(
      cards.map((card) => {
        return { ...card, number: formatMaskCardNumber(card.number) };
      }),
      { status: 200 },
    );
  }),
  http.delete('/cards/:id', ({ params }) => {
    const { id } = params;

    cards = cards.filter((card) => card.id !== id);

    return HttpResponse.json(undefined, { status: 204 });
  }),
];
