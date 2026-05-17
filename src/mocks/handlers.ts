import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/cards", () => {
    return HttpResponse.json([]);
  }),
];
