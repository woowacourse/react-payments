import { http, HttpResponse } from "msw";

interface CardRecord {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

const cards: CardRecord[] = [];

function isValidBin(number: string): boolean {
  if (/^4\d{15}$/.test(number)) return true;
  if (/^5[1-5]\d{14}$/.test(number)) return true;
  if (/^3[47]\d{13}$/.test(number)) return true;
  if (/^36\d{12}$/.test(number)) return true;

  const len = number.length;
  if (len === 16) {
    const p6 = parseInt(number.slice(0, 6));
    if (p6 >= 622126 && p6 <= 622925) return true;
    const p3 = parseInt(number.slice(0, 3));
    if (p3 >= 624 && p3 <= 626) return true;
    const p4 = parseInt(number.slice(0, 4));
    if (p4 >= 6282 && p4 <= 6288) return true;
  }

  return false;
}

function maskNumber(number: string): string {
  return number.slice(0, 6) + "******" + number.slice(-4);
}

function isValidExpirationDate(expirationDate: string): boolean {
  if (!/^\d{2}\/\d{2}$/.test(expirationDate)) return false;
  const month = parseInt(expirationDate.slice(0, 2));
  return month >= 1 && month <= 12;
}

export const handlers = [
  // GET /cards
  http.get("/react-payments/cards", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = cards.map(
      ({ id, issuerCode, number, expirationDate }) => ({
        id,
        issuerCode,
        number: maskNumber(number),
        expirationDate,
      }),
    );
    return HttpResponse.json(response);
  }),

  // POST /cards
  http.post("/react-payments/cards", async ({ request }) => {
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
    cards.push({
      id,
      issuerCode: body.issuerCode,
      number: body.number,
      expirationDate: body.expirationDate,
    });

    return HttpResponse.json({ id }, { status: 201 });
  }),

  // DELETE /cards/:id
  http.delete("/react-payments/cards/:id", ({ params }) => {
    const index = cards.findIndex((card) => card.id === params.id);
    if (index !== -1) cards.splice(index, 1);
    return new HttpResponse(null, { status: 204 });
  }),
];
