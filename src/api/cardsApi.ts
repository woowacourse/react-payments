export const cardsApi = {
  get: () => fetch("/cards"),
  post: (body: {
    number: string;
    expirationDate: string;
    cvc: string;
    issuerCode: string;
  }) =>
    fetch("/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  delete: (id: string) => fetch(`/cards/${id}`, { method: "DELETE" }),
};
