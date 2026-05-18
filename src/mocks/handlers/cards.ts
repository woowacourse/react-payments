import { delay, http, HttpResponse } from 'msw';
import type {
  Card,
  CardFormInfoType,
  PostedCard,
} from '../../domain/card/types/card';
import { validatePostedCard } from '../../feature/CardList/utils/ValidatePostedCard';
import { getCardIssuerCode } from '../../feature/CardList/utils/issuerCode';
import { maskCardNumber } from '../../domain/card/utils/cardDisplay';

const cards: Card[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    issuerCode: '31',
    number: '551112******9012',
    expirationDate: '12/28',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655441234',
    issuerCode: '41',
    number: '121212******9012',
    expirationDate: '06/32',
  },
];

export const cardHandlers = [
  // GET 요청 모킹
  http.get('/cards', async () => {
    await delay(1000);

    return HttpResponse.json(cards);
  }),

  // POST 요청 모킹
  http.post('/cards', async ({ request }) => {
    const body = (await request.json()) as CardFormInfoType;

    // post된
    const postedCard: PostedCard = {
      number: body.cardNumbers.join(''),
      expirationDate: `${body.expiryMonth}/${body.expiryYear}`,
      cvc: body.cvcNumber,
      issuerCode: getCardIssuerCode(body.cardCompanyId),
    };

    const error = validatePostedCard(postedCard);
    if (error) return HttpResponse.json(error, { status: 400 });

    const cardId = crypto.randomUUID();
    const card: Card = {
      id: cardId,
      issuerCode: postedCard.issuerCode,
      number: maskCardNumber(postedCard.number),
      expirationDate: postedCard.expirationDate,
    };
    cards.push(card);

    return HttpResponse.json(cardId, { status: 201 });
  }),

  // DELETE 요청 모킹
  http.delete('/cards/:id', ({ params }) => {
    const cardId = String(params.id);
    const targetCardIndex = cards.findIndex((card) => card.id === cardId);

    if (targetCardIndex !== -1) cards.splice(targetCardIndex, 1);

    return new HttpResponse(null, { status: 204 });
  }),
];
