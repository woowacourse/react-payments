import { http, HttpResponse } from 'msw';

import { BRAND_NUMBER } from '@/pages/payments/register/form/constant';

import { cards } from '@/mocks/data/cards';

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

export const handlers = [
  http.post('/cards', async ({ request }) => {
    const data = await request.clone().json();
    // 400 - INVALID_CARD_NUMBER
    const isValidBin = validateBin(data?.numbers);
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

    // 201
    return HttpResponse.json({ id: crypto.randomUUID() }, { status: 201 });
  }),
  http.get('/cards', () => {
    return HttpResponse.json(cards, { status: 201 });
  }),
];
