import { http, HttpResponse } from 'msw';

interface CreateCardRequest {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

// TODO: body type에 대한 검증/에러처리 필요할지
export const handler = http.post(`${import.meta.env.BASE_URL}cards`, async ({ request }) => {
  const body = (await request.json()) as CreateCardRequest;

  if (!validateCardNumber(body.number)) {
    return HttpResponse.json(
      { code: 'INVALID_CARD_NUMBER', message: '유효하지 않은 카드 번호입니다.' },
      { status: 400 },
    );
  }

  if (!validateCvc(body.cvc)) {
    return HttpResponse.json({ code: 'INVALID_CVC', message: '유효하지 않은 CVC입니다.' }, { status: 400 });
  }

  if (!validateExpirationDate(body.expirationDate)) {
    return HttpResponse.json(
      { code: 'INVALID_EXPIRATION_DATE', message: '유효하지 않은 만료일입니다.' },
      { status: 400 },
    );
  }

  createCardFromRequest(body);
  return HttpResponse.json({ id: crypto.randomUUID() }, { status: 201 });
});

const validateCardNumber = (cardNumber: string) => {
  return true;
};

const validateCvc = (cvc: string) => {
  return cvc !== '000';
};

const validateExpirationDate = (expirationDate: string) => {
  return true;
};

const createCardFromRequest = (request: CreateCardRequest) => {
  // 전역 cards 객체 배열에 push
};
