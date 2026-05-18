import { http, HttpResponse } from 'msw';
import { cards } from '../../datas/cards.ts';
import { categorizeCardBrand, chunkString } from '../../../utils.ts';
import type { SCard } from '../../datas/cards.type.ts';

export interface SCreateCardRequest {
  issuerCode: string;
  number: string;
  expirationDate: string;
  cvc: string;
}
export type SCreateCardResponse = Pick<SCard, 'id'>;

// TODO: body type에 대한 검증/에러처리 필요할지
export const handler = http.post(`${import.meta.env.BASE_URL}cards`, async ({ request }) => {
  const body = (await request.json()) as SCreateCardRequest;

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
  const cardNumbers = chunkString(cardNumber, 4);
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

const createCard = (request: SCreateCardRequest) => {
  const card = {
    ...request,
    id: crypto.randomUUID(),
  };

  cards.push(card);
};
