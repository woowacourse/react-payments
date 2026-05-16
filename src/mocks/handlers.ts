import { http, HttpResponse } from "msw";

export const BASE_URL = "https://woowa.yiheon.com";

const getCardListHandler = http.get(`${BASE_URL}/cards`, () => {
  return HttpResponse.json([
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      issuerCode: "31",
      number: "551112******9012",
      expirationDate: "12/28",
    },
  ]);
});

const postCardHandler = http.post(`${BASE_URL}/cards`, async ({ request }) => {
  // const body = await request.json();
  // todo
  // 검증 로직에 따라 다른 에러처리 필요
  return HttpResponse.json(
    { id: "550e8400-e29b-41d4-a716-446655440000" },
    { status: 201 },
  );
});

const deleteCardHandler = http.delete(
  `${BASE_URL}/cards/:id`,
  async ({ params }) => {
    const { id } = params;
    return HttpResponse.json(null, { status: 204 });
  },
);

export const handlers = [
  getCardListHandler,
  postCardHandler,
  deleteCardHandler,
];
