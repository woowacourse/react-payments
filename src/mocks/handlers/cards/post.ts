import { http, HttpResponse } from 'msw';
import { cards } from '../../datas/cards.ts';
import type { Card } from '../../datas/cards.type.ts';
import { categorizeCardBrand } from '../../../utils.ts';

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

  createCard(body);
  return HttpResponse.json({ id: crypto.randomUUID() }, { status: 201 });
});

const validateCardNumber = (cardNumber: string) => {
  return validateBin(cardNumber);
};

const validateCvc = (cvc: string) => {
  return cvc !== '000';
};

const validateExpirationDate = (expirationDate: string) => {
  return validateExpirationDateFormat(expirationDate) && validateExpirationMonth(expirationDate);
};

const validateBin = (cardNumber: string) => {
  const cardNumbers = [cardNumber.slice(0, 4), cardNumber.slice(4, 8), cardNumber.slice(8, 12), cardNumber.slice(12)];
  const cardBrand = categorizeCardBrand(cardNumbers);
  return cardBrand !== 'local';
};

const validateExpirationDateFormat = (expirationDate: string) => {
  const regex = /^\d{2}\/\d{2}$/;
  return regex.test(expirationDate);
};

const validateExpirationMonth = (expirationDate: string) => {
  const [month] = expirationDate.split('/');
  return Number(month) >= 1 && Number(month) <= 12;
};

const createCard = (request: CreateCardRequest) => {
  const card = createCardFromRequest(request);
  cards.push(card);
};

const createCardFromRequest = (request: CreateCardRequest): Card => {
  return {
    id: crypto.randomUUID(),
    issuerCode: request.issuerCode,
    number: request.number,
    expirationDate: request.expirationDate,
  };
};
