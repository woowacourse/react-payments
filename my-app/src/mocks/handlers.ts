import { http, HttpResponse } from 'msw';
import { isCardNumberCorrect, isCvcCorrect, isExpirationDateCorrect } from '../utils/Validation';

export const handlers = [
  http.post('/cards', async ({ request }) => {
    const requestDetail = (await request.json()) as Record<string, string>;
    const { number, expirationDate, cvc } = requestDetail;

    // 카드 번호 에러 처리, 카드 브랜드 에러 처리
    if (!isCardNumberCorrect(number)) {
      return HttpResponse.json(
        {
          code: 'INVALID_CARD_NUMBER',
          message: '유효하지 않은 카드 번호입니다.',
        },
        { status: 400 },
      );
    }

    // 유효기간 에러 처리
    if (!isExpirationDateCorrect(expirationDate)) {
      return HttpResponse.json(
        {
          code: 'INVALID_EXPIRATION_DATE',
          message: '유효하지 않은 만료일입니다.',
        },
        { status: 400 },
      );
    }

    // CVC 에러 처리
    if (!isCvcCorrect(cvc)) {
      return HttpResponse.json(
        {
          code: 'INVALID_CVC',
          message: '유효하지 않은 CVC입니다.',
        },
        { status: 400 },
      );
    }

    return HttpResponse.json({ id: crypto.randomUUID() }, { status: 201 });
  }),

  http.get('/cards', () => {
    return HttpResponse.json(
      [
        {
          id: '550e8400-e29b-41d4-a716-446655440000',
          issuerCode: '31',
          number: '411111******1111',
          expirationDate: '12/12',
        },
      ],
      { status: 200 },
    );
  }),

  http.delete('/cards/:id', () => {
    return new HttpResponse(null, { status: 204 });
  }),
];
