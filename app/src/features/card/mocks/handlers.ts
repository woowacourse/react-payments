import { http, HttpResponse } from "msw";
import { CardSerializer } from "../Serializer";
import { type CardInterface } from "../Card";
import Card from "../Card";

const cardStore: CardInterface[] = [];

export const handlers = [
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json({
      firstName: "John",
      lastName: "Maverick",
    });
  }),

  http.post("https://api.antolibank.com/cards", async ({ request }) => {
    const data = await request.formData();
    const cardData = {
      number: (data.get("cardNumber") as string) ?? "",
      expirationDate: (data.get("cardExpiryDate") as string) ?? "",
      cvc: (data.get("cardBrand") as string) ?? "",
      issuerCode: (data.get("cardCVC") as string) ?? "",
    };
    const result = CardSerializer.validate(cardData);
    if (result.isValid) {
      const card = new Card(
        cardData.number,
        cardData.expirationDate,
        cardData.cvc,
        cardData.issuerCode,
      );
      cardStore.push(card);
      return HttpResponse.json({ message: "카드 생성!" }, { status: 201 });
    } else {
      return HttpResponse.json(
        { errorMessages: result.errors },
        { status: 400 },
      );
    }
  }),
];
