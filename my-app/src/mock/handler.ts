import { http, HttpResponse } from "msw";

type CardBody = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

type Card = CardBody & { id: string };

const cardStore: Card[] = [];

export const handlers = [
  http.post("/cards", async ({ request }) => {
    const { number, expirationDate, cvc, issuerCode } = (await request.json()) as CardBody;

    const numberDigits = number.replace(/[\s-]/g, "");
    if (!/^\d{14,16}$/.test(numberDigits)) {
      return HttpResponse.json(
        { code: "INVALID_CARD_NUMBER", message: "유효하지 않은 카드 번호입니다." },
        { status: 400 },
      );
    }

    if (cvc === "000") {
      return HttpResponse.json({ code: "INVALID_CVC", message: "유효하지 않은 CVC입니다." }, { status: 400 });
    }

    const expirationMatch = expirationDate.match(/^(\d{2})\/\d{2}$/);
    const month = expirationMatch ? parseInt(expirationMatch[1], 10) : null;
    if (!expirationMatch || month === null || month < 1 || month > 12) {
      return HttpResponse.json(
        { code: "INVALID_EXPIRATION_DATE", message: "유효하지 않은 만료일입니다." },
        { status: 400 },
      );
    }

    const newCard: Card = {
      id: crypto.randomUUID(),
      number,
      expirationDate,
      cvc,
      issuerCode,
    };
    cardStore.push(newCard);
    return HttpResponse.json({ id: newCard.id }, { status: 201 });
  }),

  http.get("/cards", () => {
    return HttpResponse.json(cardStore);
  }),

  http.delete("/cards/:id", ({ params }) => {
    const index = cardStore.findIndex((card) => card.id === params.id);
    if (index !== -1) cardStore.splice(index, 1);
    return new HttpResponse(null, { status: 204 });
  }),
];
