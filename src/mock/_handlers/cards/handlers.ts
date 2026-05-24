import { http, HttpResponse } from "msw";

import { cardStore } from "./store";
import { isValidBin, isValidExpirationDate } from "./utils";

const ENDPOINT = "api/cards";

export const getCards = http.get(ENDPOINT, () => {
  return HttpResponse.json(cardStore.getAll(), { status: 200 });
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
  cardStore.add({
    id,
    issuerCode: body.issuerCode,
    rawNumber: body.number,
    expirationDate: body.expirationDate,
  });

  return HttpResponse.json({ id }, { status: 201 });
});

const handlers = [getCards, registerCard];

export default handlers;
