import { delay, http, HttpResponse } from 'msw';
import { getCardBrand } from '../utils/cardBrand';
import { CARD_ISSUER_CODE } from '../constants/constant';
import { isCardExpiryDateComplete } from '../utils/validate';
import type { CardIssuerType } from '../types/cardStausTypes';
import type { CardInfo } from '../types/cardStausTypes';

type CardRequest = Omit<CardInfo, 'id' | 'issuerCode'> & {
  issuerCode: CardIssuerType;
};

let cardInfo: CardInfo[] = [];

const ERROR_MESSAGE = {
  INVALID_CARD_NUMBER: '유효하지 않은 카드 번호입니다.',
  INVALID_CVC: '유효하지 않은 CVC입니다.',
  INVALID_EXPIRATION_DATE: '유효하지 않은 만료일입니다.',
};

function createErrorResponse(code: keyof typeof ERROR_MESSAGE) {
  return HttpResponse.json(
    {
      code,
      message: ERROR_MESSAGE[code],
    },
    {
      status: 400,
    },
  );
}

export const handlers = [
  // post
  http.post('/api/cards', async ({ request }) => {
    const body = (await request.json()) as CardRequest;

    if (getCardBrand(body.number) === 'unknown') {
      return createErrorResponse('INVALID_CARD_NUMBER');
    }

    if (body.cvc === '000') {
      return createErrorResponse('INVALID_CVC');
    }

    if (!isCardExpiryDateComplete(body.expirationDate.split('/'))) {
      return createErrorResponse('INVALID_EXPIRATION_DATE');
    }

    const newCardInfo: CardInfo = {
      id: crypto.randomUUID(),
      number: body.number,
      expirationDate: body.expirationDate,
      cvc: body.cvc,
      issuerCode: CARD_ISSUER_CODE[body.issuerCode],
    };

    cardInfo.push(newCardInfo);

    return HttpResponse.json(newCardInfo.id, {
      status: 201,
    });
  }),

  // get
  http.get('/api/cards', async () => {
    await delay(500);

    return HttpResponse.json(cardInfo);
  }),

  // delete
  http.delete('/api/cards/:id', ({ params }) => {
    const { id } = params;

    cardInfo = cardInfo.filter((card) => card.id !== id);

    return new HttpResponse(null, {
      status: 204,
    });
  }),
];
