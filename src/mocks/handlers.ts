import { http, HttpResponse } from "msw";
import { CARD } from "./cards";
import { selectCardType } from "../utils/selectCardType";

interface CardRequest {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
  cvc: string;
}

interface Card extends CardRequest {
  id: string;
}

export const handlers = [
  http.get("/cards", () => {
    return HttpResponse.json(CARD);
  }),
  http.post("/cards", async ({ request }) => {
    const requestData = (await request.clone().json()) as CardRequest;

    const { cardType } = selectCardType(requestData.number);

    if (!cardType) {
      return HttpResponse.json(
        {
          code: "INVALID_CARD_NUMBER",
          message: "유효하지 않은 카드 번호입니다.",
        },
        { status: 400 },
      );
    }

    if (requestData.cvc === "000") {
      return HttpResponse.json(
        {
          code: "INVALID_CVC",
          message: "유효하지 않은 CVC입니다.",
        },
        { status: 400 },
      );
    }

    const expRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expRegex.test(requestData.expirationDate)) {
      return HttpResponse.json(
        {
          code: "INVALID_EXPIRATION_DATE",
          message: "유효하지 않은 만료일입니다.",
        },
        { status: 400 },
      );
    }

    const newId = crypto.randomUUID();

    const newCard: Card = {
      ...requestData,
      id: newId,
    };

    CARD.push(newCard);
    return HttpResponse.json({ id: newId, status: 201 });
  }),
];
