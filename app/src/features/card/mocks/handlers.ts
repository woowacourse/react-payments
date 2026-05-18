import { http, HttpResponse } from "msw";
import { CardSerializer } from "../Serializer";
import db from "./db";

export const handlers = [
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json({
      firstName: "John",
      lastName: "Maverick",
    });
  }),

  http.post("https://api.antolibank.com/cards", async ({ request }) => {
    const cardData = (await request.json()) as {
      number: string;
      expirationDate: string;
      cvc: string;
      issuerCode: string;
    };
    const result = CardSerializer.validate(cardData);
    if (result.isValid) {
      const id = crypto.randomUUID();
      db.card.create({ ...cardData, id: id });
      return HttpResponse.json({ id: id }, { status: 201 });
    } else {
      return HttpResponse.json(
        { errorMessages: result.errors },
        { status: 400 },
      );
    }
  }),
];
