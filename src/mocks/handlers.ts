import type { CardRegisterRequest } from "@/api/cards";
import { detectCardBrand } from "@/utils/card";
import { http, HttpResponse } from "msw";

interface RegisteredCard extends CardRegisterRequest {
  id: string;
}

const cards: RegisteredCard[] = [];

export const resetCards = () => cards.splice(0, cards.length);

export const handlers = [
  http.post("/cards", async ({ request }) => {
    const card = (await request.json()) as CardRegisterRequest;

    if (!detectCardBrand(card.number)) {
      return HttpResponse.json(
        {
          code: "INVALID_CARD_NUMBER",
          message: "유효하지 않은 카드 번호입니다.",
        },
        { status: 400 },
      );
    }

    if (card.cvc === "000") {
      return HttpResponse.json(
        {
          code: "INVALID_CVC",
          message: "유효하지 않은 CVC입니다.",
        },
        { status: 400 },
      );
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(card.expirationDate)) {
      return HttpResponse.json(
        {
          code: "INVALID_EXPIRATION_DATE",
          message: "유효하지 않은 만료일입니다.",
        },
        { status: 400 },
      );
    }

    cards.push({
      id: crypto.randomUUID(),
      ...card,
    });

    return new HttpResponse(null, { status: 201 });
  }),

  http.get("/cards", () => {
    const response = cards.map((card) => {
      return {
        id: card.id,
        issuerCode: card.issuerCode,
        maskedNumber: maskCardNumber(card.number),
        expirationDate: card.expirationDate,
      };
    });

    return HttpResponse.json(response, { status: 200 });
  }),

  http.delete("/cards/:cardId", ({ params }) => {
    const { cardId } = params;

    const targetIndex = cards.findIndex((card) => card.id === cardId);

    if (targetIndex !== -1) {
      cards.splice(targetIndex, 1);
    }

    return new HttpResponse(null, { status: 204 });
  }),
];

const maskCardNumber = (cardNumber: string) => {
  return `${cardNumber.slice(0, 6)}******${cardNumber.slice(-4)}`;
};
