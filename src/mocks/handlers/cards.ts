import { delay, http, HttpResponse } from 'msw';
import type {
  Card,
  CardFormInfoType,
  PostedCard,
} from '../../domain/card/types/card';
import { validatePostedCard } from '../../feature/CardList/utils/ValidatePostedCard';
import { getCardIssuerCode } from '../../feature/CardList/utils/issuerCode';
import { maskCardNumber } from '../../domain/card/utils/cardDisplay';

const cards: Card[] = [];

export const cardHandlers = [
  // GET 요청 모킹
  http.get('/cards', async () => {
    await delay(1000);

    const cardResponses: Card[] = cards.map((card) => ({
      id: card.id,
      issuerCode: card.issuerCode,
      number: maskCardNumber(card.number), // 원본을 마스킹해서 응답
      expirationDate: card.expirationDate,
    }));

    return HttpResponse.json(cardResponses);
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
      number: postedCard.number, // 번호 원본 저장
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
