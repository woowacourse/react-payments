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
    throw new NetworkError(
      "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
    );
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
