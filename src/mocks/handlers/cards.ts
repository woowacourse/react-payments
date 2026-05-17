import { delay, http, HttpResponse } from 'msw';
import type {
  Card,
  CardFormInfoType,
  PostedCard,
} from '../../domain/card/types/card';
import { validatePostedCard } from '../../feature/CardList/utils/ValidatePostedCard';

const cards: Card[] = [
  {
    id: '1',
    number: ['1111', '2222', '3333', '4444'],
    expirationDate: '01/40',
    cvc: '123',
    issuerCode: 'bc',
  },
  {
    id: '2',
    number: ['1234', '1234', '1234', '1234'],
    expirationDate: '01/20',
    cvc: '456',
    issuerCode: 'shinhan',
  },
];

export const cardHandlers = [
  // GET 요청 모킹
  http.get('/cards', async () => {
    await delay(2000);

    return HttpResponse.json(cards);
    // return HttpResponse.json(
    //   { message: '카드 목록을 불러올 수 없습니다.' },
    //   { status: 500 },
    // );
  }),

  // POST 요청 모킹
  http.post('/cards', async ({ request }) => {
    const body = (await request.json()) as CardFormInfoType;

    const newCard: PostedCard = {
      number: body.cardNumbers,
      expirationDate: `${body.expiryMonth}/${body.expiryYear}`,
      cvc: body.cvcNumber,
      issuerCode: body.cardCompanyId, // cardCompanyId -> issuerCode로 변환 필요
    };

    const error = validatePostedCard(newCard);
    if (error) return HttpResponse.json(error, { status: 400 });

    const cardId = crypto.randomUUID();
    cards.push({ id: cardId, ...newCard });

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
