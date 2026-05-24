import { http, HttpResponse, delay } from "msw";
import { getCardBrand } from "../utils/getCardBrand";

type StoredCard = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
  rawNumber: string;
};

type PostCardBody = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

let cards: StoredCard[] = [];

function maskNumber(number: string): string {
  return number.slice(0, 6) + "******" + number.slice(-4);
}

export const handlers = [
  http.get("/cards", async () => {
    await delay(1000);
    const response = cards.map(
      ({ id, issuerCode, number, expirationDate }) => ({
        id,
        issuerCode,
        number,
        expirationDate,
      }),
    );
    return HttpResponse.json(response);
  }),

  http.post("/cards", async ({ request }) => {
    const body = (await request.json()) as PostCardBody;

    const cardBrand = getCardBrand({
      first: body.number.slice(0, 4),
      second: body.number.slice(4, 8),
      third: body.number.slice(8, 12),
      fourth: body.number.slice(12),
    });

    if (cardBrand === null) {
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

    const [mm] = body.expirationDate.split("/");
    const mmNum = parseInt(mm, 10);

    if (
      !/^\d{2}\/\d{2}$/.test(body.expirationDate) ||
      mmNum < 1 ||
      mmNum > 12
    ) {
      return HttpResponse.json(
        {
          code: "INVALID_EXPIRATION_DATE",
          message: "유효하지 않은 만료일입니다.",
        },
        { status: 400 },
      );
    }

    const newCard: StoredCard = {
      id: crypto.randomUUID(),
      issuerCode: body.issuerCode,
      number: maskNumber(body.number),
      expirationDate: body.expirationDate,
      rawNumber: body.number,
    };

    cards.push(newCard);
    return HttpResponse.json({ id: newCard.id }, { status: 201 });
  }),

  http.delete("/cards/:id", ({ params }) => {
    cards = cards.filter((c) => c.id !== params.id);
    return new HttpResponse(null, { status: 204 });
  }),
];
