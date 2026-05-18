import { delay, http, HttpResponse } from 'msw';
import {
  isCardNumberCorrect,
  isCvcCorrect,
  isExpirationDateCorrect,
} from '../utils/Validation';

interface Card {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

const cards: Card[] = [];

export const handlers = [
  http.post('/cards', async ({ request }) => {
    const requestDetail = (await request.json()) as Record<string, string>;
    const { number, expirationDate, cvc, issuerCode } = requestDetail;

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

    const newCard: Card = {
      id: crypto.randomUUID(),
      issuerCode,
      number,
      expirationDate,
    };

    cards.push(newCard);

    return HttpResponse.json({ id: newCard.id }, { status: 201 });
  }),

  http.get('/cards', async () => {
    await delay(1000);

    const maskingCards = cards.map((card) => {
      const prefix = card.number.slice(0, 6);
      const suffix = card.number.slice(-4);
      const maskingLength = card.number.length - 10;
      const mask = '*'.repeat(maskingLength);

      return {
        ...card,
        number: `${prefix}${mask}${suffix}`,
      };
    });

    return HttpResponse.json(maskingCards, { status: 200 });
  }),

  http.delete('/cards/:id', ({ params }) => {
    const id = params.id;
    const targetIndex = cards.findIndex((card) => card.id === id);

    if (targetIndex !== -1) {
      cards.splice(targetIndex, 1);
    }

    return new HttpResponse(null, { status: 204 });
  }),
];
