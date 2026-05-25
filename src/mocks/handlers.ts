import { delay, http, HttpResponse } from 'msw';
import { ApiErrorCode } from '../apis/api';
import { CardListResponse, RegisterCardRequest, RegisterCardResponse } from '../apis/cards';
import { CARD_BRAND_RULE } from '../constants';
import { expirationDateValidator } from '../utils/validate';
import { cardDB } from './db';

const ERROR_MESSAGE: Record<ApiErrorCode, string> = {
  INVALID_CARD_NUMBER: '유효하지 않은 카드 번호입니다.',
  INVALID_CVC: '유효하지 않은 CVC입니다.',
  INVALID_EXPIRATION_DATE: '유효하지 않은 만료일입니다.',
};

const errorResponse = (status: number, code: ApiErrorCode) =>
  HttpResponse.json({ code, message: ERROR_MESSAGE[code] }, { status });

const isInvalidCardNumber = (number: string) =>
  !CARD_BRAND_RULE.some(({ prefixPattern }) => prefixPattern.test(number));

const isInvalidExpirationDate = (expirationDate: string) => {
  const match = expirationDate.match(/^(\d{2})\/(\d{2})$/);
  if (!match) return true;

  const [, month] = match;
  return expirationDateValidator(month, 0).error;
};

const validateRegisterCard = (body: RegisterCardRequest) => {
  if (isInvalidCardNumber(body.number)) return errorResponse(400, 'INVALID_CARD_NUMBER');
  if (body.cvc === '000') return errorResponse(400, 'INVALID_CVC');
  if (isInvalidExpirationDate(body.expirationDate))
    return errorResponse(400, 'INVALID_EXPIRATION_DATE');
  return null;
};

export const handlers = [
  http.get('*/cards', async () => {
    const list: CardListResponse = cardDB
      .list()
      .map(({ id, issuerCode, number, expirationDate }) => ({
        id,
        issuerCode,
        number,
        expirationDate,
      }));

    await delay(1500);
    return HttpResponse.json(list, { status: 200 });
  }),

  http.post('*/cards', async ({ request }) => {
    const body = (await request.json()) as RegisterCardRequest;

    const error = validateRegisterCard(body);
    if (error) return error;

    const created = cardDB.add(body);
    const response: RegisterCardResponse = { id: created.id };
    return HttpResponse.json(response, { status: 201 });
  }),

  http.delete<{ id: string }>('*/cards/:id', ({ params }) => {
    cardDB.remove(params.id);
    return new HttpResponse(null, { status: 204 });
  }),
];
