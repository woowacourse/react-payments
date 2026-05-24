import { http, HttpResponse } from "msw";

import { cardStore } from "../store";

const ENDPOINT = "api/cards/:id";

export const deleteCard = http.delete(ENDPOINT, ({ params }) => {
  cardStore.remove(params.id as string);
  return new HttpResponse(null, { status: 204 });
});

const handlers = [deleteCard];

export default handlers;
