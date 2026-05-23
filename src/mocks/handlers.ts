import { http, HttpResponse } from "msw";
import { CARD } from "./cards";
import { selectCardType } from "../utils/selectCardType";

export interface CardPostRequest {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

export interface Card extends CardPostRequest {
  id: string;
}

export interface CardGetResponse {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

const filterCardNumber = (cardNumber: string) => {
  const firstNonMasking = cardNumber.substring(0, 6);
  const lastNonMasking = cardNumber.slice(-4);
  const maskingNumberRange = cardNumber.substring(6, cardNumber.length - 4);
  const maskedCardNumber = "*".repeat(maskingNumberRange.length);
  return firstNonMasking + maskedCardNumber + lastNonMasking;
};

export const handlers = [
  http.get("/cards", () => {
    const maskedCard = CARD.map((value) => ({
      ...value,
      number: filterCardNumber(value.number),
    }));
    return HttpResponse.json(maskedCard);
  }),
  http.post("/cards", async ({ request }) => {
    const requestData = (await request.clone().json()) as CardPostRequest;

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
    return HttpResponse.json({ id: newId }, { status: 201 });
  }),
  http.delete("/cards/:id", ({ params }) => {
    const { id } = params;

    const newCard = CARD.filter((value) => value.id !== id);
    CARD.splice(0, CARD.length, ...newCard);
    return new HttpResponse(null, { status: 204 });
  }),
];
