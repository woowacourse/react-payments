import { http, HttpResponse } from "msw";

import { isValidBin, isValidExpirationDate } from "./utils";

const ENDPOINT = "api/cards";

export const getCards = http.get(ENDPOINT, () => {
  const cards = [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      issuerCode: "31",
      number: "551112******9012",
      expirationDate: "12/28",
    },
    {
      id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
      issuerCode: "41",
      number: "551112******9012",
      expirationDate: "12/28",
    },
  ];

  return HttpResponse.json(cards, { status: 200 });
});

export const registerCard = http.post(ENDPOINT, async ({ request }) => {
  const body = (await request.json()) as {
    number: string;
    expirationDate: string;
    cvc: string;
    issuerCode: string;
  };

  if (!isValidBin(body.number)) {
    return HttpResponse.json(
      {
        code: "INVALID_CARD_NUMBER",
        message: "유효하지 않은 카드 번호입니다.",
      },
      { status: 400 },
    );
  }

  if (body.cvc === "000") {
    return HttpResponse.json(
      { code: "INVALID_CVC", message: "유효하지 않은 CVC입니다." },
      { status: 400 },
    );
  }

  if (!isValidExpirationDate(body.expirationDate)) {
    return HttpResponse.json(
      {
        code: "INVALID_EXPIRATION_DATE",
        message: "유효하지 않은 만료일입니다.",
      },
      { status: 400 },
    );
  }

  const id = crypto.randomUUID();

  return HttpResponse.json({ id }, { status: 201 });
});

const handlers = [getCards, registerCard];

export default handlers;
