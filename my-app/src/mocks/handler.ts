import { http, HttpResponse } from "msw";

import { store } from "./cardStore.ts";
import type { CreateCardRequest } from "../apis/cards";

const BASE_URL = "/api";

const VALID_MONTH_REGEX = /^(0[1-9]|1[0-2])$/;
const SUPPORTED_BIN_REGEX = /^(4|5[1-5]|3[47]|36|62)/;
const INVALID_CVC_NUMBER = "000";

const validateCreateCard = (body: CreateCardRequest) => {
  const [month] = body.expirationDate.split("/");

  if (!VALID_MONTH_REGEX.test(month)) {
    return { code: "INVALID_EXPIRATION_DATE", message: "유효하지 않은 만료일입니다." };
  }

  if (body.cvc === INVALID_CVC_NUMBER) {
    return { code: "INVALID_CVC", message: "유효하지 않은 CVC입니다." };
  }

  if (!SUPPORTED_BIN_REGEX.test(body.number)) {
    return { code: "INVALID_CARD_NUMBER", message: "유효하지 않은 카드입니다." };
  }
  return null;
};

export const handlers = [
  http.post(`${BASE_URL}/cards`, async ({ request }) => {
    const body = (await request.json()) as CreateCardRequest;
    const error = validateCreateCard(body);

    if (error) {
      return HttpResponse.json(error, { status: 400 });
    }

    const id = store.add({
      issuerCode: body.issuerCode,
      number: body.number,
      expirationDate: body.expirationDate,
    });

    return HttpResponse.json({ id }, { status: 201 });
  }),

  http.get(`${BASE_URL}/cards`, () => {
    return HttpResponse.json(store.list());
  }),

  http.delete(`${BASE_URL}/cards/:id`, ({ params }) => {
    store.remove(params.id as string);
    return new HttpResponse(null, { status: 204 });
  }),
];
