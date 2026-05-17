import { http, HttpResponse } from "msw";
import type { Card } from "../pages/CardListPage";

let cards: Card[] = [];
let nextId = 1;

export const handlers = [
  http.get("/cards", () => {
    return HttpResponse.json(cards);
  }),

  http.post("/cards", async ({ request }) => {
    const body = (await request.json()) as Omit<Card, "id">;
    const newCard = { ...body, id: String(nextId++) };
    cards.push(newCard);
    return HttpResponse.json(newCard, { status: 201 });
  }),

  http.delete("/cards/:id", ({ params }) => {
    cards = cards.filter((c) => c.id !== params.id);
    return new HttpResponse(null, { status: 204 });
  }),
];
