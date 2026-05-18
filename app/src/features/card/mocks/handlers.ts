import { http, HttpResponse } from "msw";
import { CardSerializer } from "../Serializer";

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
      cardNumber: (data.get("cardNumber") as string) ?? "",
      cardExpiryDate: (data.get("cardExpiryDate") as string) ?? "",
      cardBrand: (data.get("cardBrand") as string) ?? "",
      cardCVC: (data.get("cardCVC") as string) ?? "",
      cardPassword: (data.get("cardPassword") as string) ?? "",
    };
    const result = CardSerializer.validate(cardData);
    if (result.success) {
      return HttpResponse.json({ message: "카드 생성!" }, { status: 201 });
    } else {
      return HttpResponse.json(
        { errorMessages: result.errorMessages },
        { status: 400 },
      );
    }
  }),
];
