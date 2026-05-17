import { http, HttpResponse } from "msw";
import { BASE_URL } from "../constants";
import type { PostCardRequestBody } from "../feature/CardRegister/api/card";
import type { CardItemInformation } from "../feature/CardListPage/components/Success/CardItem/CardItem";

const cards: CardItemInformation[] = [];

const getCardListHandler = http.get(`${BASE_URL}/cards`, () => {
  return HttpResponse.json(cards);
});

const postCardHandler = http.post(`${BASE_URL}/cards`, async ({ request }) => {
  const body = (await request.json()) as PostCardRequestBody;
  const id = crypto.randomUUID().toString();

  const card: CardItemInformation = {
    id,
    ...body,
  };

  cards.push(card);
  // todo
  // 검증 로직에 따라 다른 에러처리 필요
  return HttpResponse.json({ id: id }, { status: 201 });
});

const deleteCardHandler = http.delete(
  `${BASE_URL}/cards/:id`,
  async ({ params }) => {
    const { id } = params;
    const targetIndex = cards.findIndex((card) => card.id === id);
    if (targetIndex > -1) {
      cards.splice(targetIndex, 1);
    }

    return HttpResponse.json(null, { status: 204 });
  },
);

export const handlers = [
  getCardListHandler,
  postCardHandler,
  deleteCardHandler,
];
