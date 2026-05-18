import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json({
      firstName: "John",
      lastName: "Maverick",
    });
  }),

  http.post("https://api.antolibank.com/cards", async ({ request }) => {
    const _data = await request.formData();
    return HttpResponse.json({
      status: 201,
      message: "create!",
    });
  }),
];
