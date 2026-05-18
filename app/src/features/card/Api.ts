const BASE_URL = "https://api.antolibank.com/cards";

export class NetworkError extends Error {}
export class HttpError extends Error {
  status: number;
  constructor(status: number) {
    super();
    this.status = status;
  }
}

const request = async (url: string, init?: RequestInit) => {
  let response: Response;
  try {
    response = await fetch(url, init);
  } catch {
    throw new NetworkError();
  }
  if (!response.ok) throw new HttpError(response.status);
  return response;
};

export const createCard = (
  cardNumber: string,
  cardExpiryDate: string,
  cardCVC: string,
  cardBrand: string,
) =>
  request(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      number: cardNumber,
      expirationDate: cardExpiryDate,
      cvc: cardCVC,
      issuerCode: cardBrand,
    }),
  });

export const getCards = () => request(BASE_URL).then((r) => r.json());

export const deleteCard = (cardId: string) =>
  request(`${BASE_URL}/${cardId}`, { method: "DELETE" });
