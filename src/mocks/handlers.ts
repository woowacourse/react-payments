import { http, HttpResponse } from "msw";

interface CardRegisterRequest {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

interface RegisteredCard extends CardRegisterRequest {
  id: string;
}

const cards: RegisteredCard[] = [];

export const handlers = [
  http.get("/cards", () => {
    const response = cards.map((card) => {
      return {
        id: card.id,
        issuerCode: card.issuerCode,
        number: card.number,
        expirationDate: card.expirationDate,
      };
    });

    return HttpResponse.json(response);
  }),
];
