import { http, HttpResponse } from "msw";
import cards from "./cards.json";

export const handlers = [
  http.get("/cards", () => {
    return HttpResponse.json(cards);
  }),
];
