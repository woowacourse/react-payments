import type { CardRegisterRequest } from "@/api/cards";
import { http, HttpResponse } from "msw";

interface RegisteredCard extends CardRegisterRequest {
  id: string;
}

const cards: RegisteredCard[] = [];

export const handlers = [
  http.get("/cards", () => {
    const response = cards.map((card) => {
      return {
        id: card.id,
        issuerCode: card.issuerCode,
        number: card.number,
        expirationDate: card.expirationDate,
      };
    });

    return HttpResponse.json(response);
  }),
  http.post("/cards", async ({ request }) => {
    const card = (await request.json()) as CardRegisterRequest;
    cards.push({
      id: crypto.randomUUID(),
      ...card,
    });

    return HttpResponse.json(null, { status: 201 });
  }),
];
