import { BASE_URL } from "../common/Constants";

export class NetworkError extends Error {}
export class HttpError extends Error {
  status: number;
  errorMessages?: Record<
    string,
    { code: string; message: string } | null | undefined
  >;
  constructor(
    status: number,
    errorMessages?: Record<
      string,
      { code: string; message: string } | null | undefined
    >,
  ) {
    super();
    this.status = status;
    this.errorMessages = errorMessages;
  }
}

const request = async (url: string, init?: RequestInit) => {
  let response: Response;
  try {
    response = await fetch(url, init);
  } catch {
    throw new NetworkError();
  }
  if (!response.ok) {
    const body = await response.json().catch(() => undefined);
    throw new HttpError(response.status, body?.errorMessages);
  }
  return response;
};

export const createCard = (
  cardNumber: string,
  cardExpiryDate: string,
  cardCVC: string,
  cardBrand: string,
) =>
  request(`${BASE_URL}/cards/`, {
    method: "POST",
    body: JSON.stringify({
      number: cardNumber,
      expirationDate: cardExpiryDate,
      cvc: cardCVC,
      issuerCode: cardBrand,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getCards = async () => {
  const response = await request(`${BASE_URL}/cards/`);
  const data = await response.json();
  return data;
};

export const deleteCard = (cardId: string) =>
  request(`${BASE_URL}/cards/${cardId}/`, { method: "DELETE" });
