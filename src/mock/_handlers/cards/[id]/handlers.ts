import { http, HttpResponse } from "msw";

const ENDPOINT = "api/cards/:id";

export const deleteCard = http.delete(ENDPOINT, () => {
  return new HttpResponse(null, { status: 204 });
});

const handlers = [deleteCard];

export default handlers;
