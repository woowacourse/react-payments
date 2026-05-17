import { http, HttpResponse } from 'msw';

// TODO: body type에 대한 검증/에러처리 필요할지
export const handler = http.delete(`${import.meta.env.BASE_URL}cards/:cardId`, async ({ params }) => {
  const { cardId } = params;

  deleteCard(Number(cardId));
  return new HttpResponse(null, { status: 204 });
});

const deleteCard = (cardId: number) => {};
