import { http, HttpResponse } from "msw";

export interface Card {
  id: string;
  cardNumberSegments: string[];
  expiryMonth: string;
  expiryYear: string;
  cardCompany: string;
}

// 지원하지 않는 카드사라고 가정
const UNSUPPORTED_COMPANIES = ["Diners", "AMEX"];

const cards: Card[] = [];

export const handlers = [
  // GET /cards -> 카드 목록 조회
  http.get("/cards", () => {
    return HttpResponse.json(cards);
  }),

  // POST /cards -> 카드 등록
  http.post("/cards", async ({ request }) => {
    const body = (await request.json()) as Omit<Card, "id"> & {
      cvc?: string;
      cardPassword?: string;
    };

    if (UNSUPPORTED_COMPANIES.includes(body.cardCompany)) {
      return HttpResponse.json(
        {
          code: "cardCompany",
          message: "지원하지 않는 카드사입니다.",
        },
        { status: 400 },
      );
    }

    const newCard: Card = {
      id: crypto.randomUUID(),
      cardNumberSegments: body.cardNumberSegments,
      expiryMonth: body.expiryMonth,
      expiryYear: body.expiryYear,
      cardCompany: body.cardCompany,
    };
    cards.push(newCard);

    return HttpResponse.json(newCard, { status: 201 });
  }),

  // DELETE /cards/:id -> 카드 삭제
  http.delete("/cards/:id", ({ params }) => {
    const { id } = params;
    const index = cards.findIndex((card) => card.id === id);

    if (index === -1) {
      return HttpResponse.json(
        { message: "카드를 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    cards.splice(index, 1);
    return new HttpResponse(null, { status: 204 });
  }),
];
