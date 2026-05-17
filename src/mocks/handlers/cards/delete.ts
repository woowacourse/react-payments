import { http, HttpResponse } from 'msw';
import { cards } from '../../datas/cards.ts';

// TODO: body type에 대한 검증/에러처리 필요할지
export const handler = http.delete<{ cardId: string }>(
  `${import.meta.env.BASE_URL}cards/:cardId`,
  async ({ params }) => {
    const { cardId } = params;

    deleteCard(cardId ?? '');
    return new HttpResponse(null, { status: 204 });
  },
);

const deleteCard = (cardId: string) => {
  const index = cards.findIndex((card) => card.id === cardId);

  if (index !== -1) {
    cards.splice(index, 1);
  }
};
