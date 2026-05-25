import { http, HttpResponse } from "msw";
import { CardSerializer } from "./Serializer";
import { BASE_URL } from "../../common/Constants";
import db from "./db";

export const handlers = [
  http.get(`${BASE_URL}/cards/`, () => {
    const cards = db.card.getAll();
    return HttpResponse.json(cards);
  }),

  http.delete(`${BASE_URL}/cards/:id/`, ({ params }) => {
    const { id } = params;
    const card = db.card.findFirst({ where: { id: { equals: id as string } } });
    if (!card) {
      return HttpResponse.json(
        { errorMessages: ["존재하지 않는 카드 입니다."] },
        { status: 404 },
      );
    }
    db.card.delete({ where: { id: { equals: id as string } } });
    return new HttpResponse(null, { status: 204 });
  }),

  http.post(`${BASE_URL}/cards/`, async ({ request }) => {
    const cardData = (await request.json()) as {
      number: string;
      expirationDate: string;
      cvc: string;
      issuerCode: string;
    };
    const result = CardSerializer.validate(cardData);
    if (result.isValid) {
      const id = crypto.randomUUID();
      db.card.create({ ...cardData, id: id });
      return HttpResponse.json({ id: id }, { status: 201 });
    } else {
      return HttpResponse.json(
        { errorMessages: result.errors },
        { status: 400 },
      );
    }
  }),
];
