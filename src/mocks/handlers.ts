import type { CardRegisterRequest } from "@/api/cards";
import { http, HttpResponse } from "msw";

interface RegisteredCard extends CardRegisterRequest {
  id: string;
}

const cards: RegisteredCard[] = [];

export const handlers = [
  http.post("/cards", async ({ request }) => {
    const card = (await request.json()) as CardRegisterRequest;
    cards.push({
      id: crypto.randomUUID(),
      ...card,
    });

    return new HttpResponse(null, { status: 201 });
  }),

  http.get("/cards", () => {
    const response = cards.map((card) => {
      return {
        id: card.id,
        issuerCode: card.issuerCode,
        number: card.number,
        expirationDate: card.expirationDate,
      };
    });

    return HttpResponse.json(response, { status: 200 });
  }),

  http.delete("/cards/:cardId", ({ params }) => {
    const { cardId } = params;

    const targetIndex = cards.findIndex((card) => card.id === cardId);

    if (targetIndex !== -1) {
      cards.splice(targetIndex, 1);
    }

    return new HttpResponse(null, { status: 204 });
  }),
];
